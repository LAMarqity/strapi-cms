'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post', ({ strapi }) => ({
  
  // Automatiskt generera JSON-LD schema markup
  async generateJsonLdSchema(postId) {
    const post = await strapi.entityService.findOne('api::post.post', postId, {
      populate: [
        'category',
        'tags',
        'faq_section',
        'how_to_steps',
        'sources_and_citations',
        'author_expertise',
        'featured_image'
      ]
    });

    if (!post) return null;

    let schema = {};

    // Bas artikel schema
    if (post.primary_schema_type === 'article' || post.primary_schema_type === 'blogposting') {
      schema = {
        '@context': 'https://schema.org',
        '@type': post.primary_schema_type === 'blogposting' ? 'BlogPosting' : 'Article',
        headline: post.title,
        description: post.excerpt || post.ai_summary,
        url: `${strapi.config.server.url}/posts/${post.slug}`,
        datePublished: post.published_at || post.createdAt,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Person',
          name: post.author_expertise?.author_credentials || 'Author'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Your Site Name'
        }
      };

      // Lägg till featured image om den finns
      if (post.featured_image) {
        schema.image = {
          '@type': 'ImageObject',
          url: `${strapi.config.server.url}${post.featured_image.url}`
        };
      }

      // Lägg till kategori som about
      if (post.category) {
        schema.about = {
          '@type': 'Thing',
          name: post.category.name
        };
      }

      // Lägg till keywords från tags
      if (post.tags && post.tags.length > 0) {
        schema.keywords = post.tags.map(tag => tag.name).join(', ');
      }
    }

    // FAQ Schema om det finns FAQ-sektioner
    if (post.faq_section && post.faq_section.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq_section.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer_summary || faq.answer
          }
        }))
      };

      // Om primär schema är FAQ, använd det som huvudschema
      if (post.primary_schema_type === 'faq') {
        schema = faqSchema;
      } else {
        // Annars, lägg till som separat schema
        schema.mainEntity = faqSchema.mainEntity;
      }
    }

    // HowTo Schema om det finns steg
    if (post.how_to_steps && post.how_to_steps.length > 0) {
      const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: post.title,
        description: post.excerpt || post.ai_summary,
        step: post.how_to_steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.step_name,
          text: step.step_description,
          ...(step.step_image && {
            image: `${strapi.config.server.url}${step.step_image.url}`
          })
        }))
      };

      if (post.primary_schema_type === 'howto') {
        schema = howToSchema;
      }
    }

    // Lägg till breadcrumbs om de finns
    if (post.breadcrumb_structure) {
      schema.breadcrumb = post.breadcrumb_structure;
    }

    return schema;
  },

  // Beräkna läs tid baserat på ordantal
  calculateReadTime(content) {
    if (!content) return 1;
    
    // Räkna ord (ungefär)
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\\s+/).length;
    
    // Genomsnitt 200 ord per minut
    const readTime = Math.ceil(wordCount / 200);
    
    return Math.max(1, readTime);
  },

  // Beräkna ordantal
  calculateWordCount(content) {
    if (!content) return 0;
    
    return content.replace(/<[^>]*>/g, '').split(/\\s+/).filter(word => word.length > 0).length;
  },

  // Uppdatera post med automatiska beräkningar
  async updatePostMetrics(postId) {
    const post = await strapi.entityService.findOne('api::post.post', postId);
    
    if (!post) return null;

    const wordCount = this.calculateWordCount(post.content);
    const readTime = this.calculateReadTime(post.content);
    const jsonLdSchema = await this.generateJsonLdSchema(postId);

    return await strapi.entityService.update('api::post.post', postId, {
      data: {
        word_count: wordCount,
        read_time: readTime,
        json_ld_schema: jsonLdSchema
      }
    });
  }
}));
