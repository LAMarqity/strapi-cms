import type { Schema, Struct } from '@strapi/strapi';

export interface AiOptimizationConversationalQuery
  extends Struct.ComponentSchema {
  collectionName: 'components_ai_optimization_conversational_queries';
  info: {
    description: 'Natural language queries for AI optimization';
    displayName: 'Conversational Query';
  };
  attributes: {
    query_intent: Schema.Attribute.Enumeration<
      ['informational', 'transactional', 'navigational']
    > &
      Schema.Attribute.DefaultTo<'informational'>;
    query_text: Schema.Attribute.String;
  };
}

export interface AiOptimizationModelCompatibility
  extends Struct.ComponentSchema {
  collectionName: 'components_ai_optimization_model_compatibility';
  info: {
    description: 'Compatibility tracking for different AI models';
    displayName: 'AI Model Compatibility';
  };
  attributes: {
    compatibility_score: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    model_name: Schema.Attribute.String;
    optimization_notes: Schema.Attribute.Text;
  };
}

export interface AiOptimizationSameAsProfile extends Struct.ComponentSchema {
  collectionName: 'components_ai_optimization_same_as_profiles';
  info: {
    description: 'Identity verification links for schema markup';
    displayName: 'Same As Profile';
  };
  attributes: {
    platform_name: Schema.Attribute.String;
    profile_url: Schema.Attribute.String;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface AiOptimizationSpeakableContent extends Struct.ComponentSchema {
  collectionName: 'components_ai_optimization_speakable_content';
  info: {
    description: 'Voice-optimized content sections';
    displayName: 'Speakable Content';
  };
  attributes: {
    speakable_context: Schema.Attribute.Text;
    speakable_text: Schema.Attribute.Text;
  };
}

export interface AuthorityAuthorExpertise extends Struct.ComponentSchema {
  collectionName: 'components_authority_author_expertise';
  info: {
    description: 'Author credentials for E-A-T signals';
    displayName: 'Author Expertise';
  };
  attributes: {
    author_certifications: Schema.Attribute.Text;
    author_credentials: Schema.Attribute.Text;
    author_experience_years: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    author_publications: Schema.Attribute.Text;
  };
}

export interface AuthorityExpertQuote extends Struct.ComponentSchema {
  collectionName: 'components_authority_expert_quotes';
  info: {
    description: 'Quotes from industry experts';
    displayName: 'Expert Quote';
  };
  attributes: {
    expert_name: Schema.Attribute.String;
    expert_organization: Schema.Attribute.String;
    expert_title: Schema.Attribute.String;
    quote_text: Schema.Attribute.Text;
  };
}

export interface AuthorityFactCheck extends Struct.ComponentSchema {
  collectionName: 'components_authority_fact_checks';
  info: {
    description: 'Verifiable claims and evidence';
    displayName: 'Fact Check';
  };
  attributes: {
    claim: Schema.Attribute.Text & Schema.Attribute.Required;
    evidence: Schema.Attribute.RichText;
    verification_source: Schema.Attribute.String;
    verification_status: Schema.Attribute.Enumeration<
      ['verified', 'pending', 'disputed']
    > &
      Schema.Attribute.DefaultTo<'pending'>;
  };
}

export interface AuthoritySourceCitation extends Struct.ComponentSchema {
  collectionName: 'components_authority_sources_and_citations';
  info: {
    description: 'Sources for AI citability and authority';
    displayName: 'Source Citation';
  };
  attributes: {
    source_author: Schema.Attribute.String;
    source_credibility: Schema.Attribute.Enumeration<
      ['high', 'medium', 'low']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
    source_date: Schema.Attribute.Date;
    source_title: Schema.Attribute.String & Schema.Attribute.Required;
    source_type: Schema.Attribute.Enumeration<
      ['academic', 'news', 'government', 'industry', 'expert']
    > &
      Schema.Attribute.DefaultTo<'industry'>;
    source_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AuthorityStatistic extends Struct.ComponentSchema {
  collectionName: 'components_authority_statistics';
  info: {
    description: 'Structured statistical data with sources';
    displayName: 'Statistic';
  };
  attributes: {
    stat_context: Schema.Attribute.Text;
    stat_date: Schema.Attribute.Date & Schema.Attribute.Required;
    stat_label: Schema.Attribute.String & Schema.Attribute.Required;
    stat_source: Schema.Attribute.String & Schema.Attribute.Required;
    stat_unit: Schema.Attribute.String;
    stat_value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface CategoryAuthor extends Struct.ComponentSchema {
  collectionName: 'components_author_authors';
  info: {
    description: '';
    displayName: 'Author';
    icon: 'address-book';
  };
  attributes: {
    user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
  };
}

export interface CategoryCategory extends Struct.ComponentSchema {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
    icon: 'birthday-cake';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CategoryInstructor extends Struct.ComponentSchema {
  collectionName: 'components_category_instructors';
  info: {
    displayName: 'Instructor';
    icon: 'paint';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    full_name: Schema.Attribute.String;
    profile_pic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface CategoryTags extends Struct.ComponentSchema {
  collectionName: 'components_category_tags';
  info: {
    displayName: 'tags';
    icon: 'tags';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBlocksCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_code_blocks';
  info: {
    description: 'Syntax-highlighted code snippets';
    displayName: 'Code Block';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
    filename: Schema.Attribute.String;
    highlight_lines: Schema.Attribute.String;
    language: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'javascript'>;
    show_line_numbers: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_cta_blocks';
  info: {
    description: 'Call-to-action block with styling options';
    displayName: 'CTA Block';
  };
  attributes: {
    background_color: Schema.Attribute.String;
    cta_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    cta_button_url: Schema.Attribute.String & Schema.Attribute.Required;
    cta_description: Schema.Attribute.Text;
    cta_style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'minimal']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    cta_title: Schema.Attribute.String & Schema.Attribute.Required;
    full_width: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ContentBlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_image_blocks';
  info: {
    description: 'Image with caption and SEO optimization';
    displayName: 'Image Block';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    alt_text: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image_size: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'full-width']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
    lazy_loading: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContentBlocksQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_quote_blocks';
  info: {
    description: 'Blockquote with attribution';
    displayName: 'Quote Block';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_company: Schema.Attribute.String;
    author_title: Schema.Attribute.String;
    quote_style: Schema.Attribute.Enumeration<
      ['default', 'highlighted', 'testimonial', 'pullquote']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    quote_text: Schema.Attribute.Text & Schema.Attribute.Required;
    source_url: Schema.Attribute.String;
  };
}

export interface ContentBlocksTableBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_table_blocks';
  info: {
    description: 'Structured table with AI-friendly markup';
    displayName: 'Table Block';
  };
  attributes: {
    responsive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sortable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    table_caption: Schema.Attribute.Text;
    table_headers: Schema.Attribute.JSON & Schema.Attribute.Required;
    table_rows: Schema.Attribute.JSON & Schema.Attribute.Required;
    table_style: Schema.Attribute.Enumeration<
      ['default', 'striped', 'bordered', 'compact', 'comparison']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    table_summary: Schema.Attribute.Text;
    table_title: Schema.Attribute.String;
  };
}

export interface ContentBlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_text_blocks';
  info: {
    description: 'Rich text content block';
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ContentBlocksVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_video_blocks';
  info: {
    description: 'Embedded video with metadata';
    displayName: 'Video Block';
  };
  attributes: {
    auto_play: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    thumbnail: Schema.Attribute.Media<'images'>;
    video_description: Schema.Attribute.Text;
    video_duration: Schema.Attribute.String;
    video_title: Schema.Attribute.String;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFeaturesCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_content_features_call_to_actions';
  info: {
    description: 'Strategic CTAs with context';
    displayName: 'Call To Action';
  };
  attributes: {
    cta_context: Schema.Attribute.Text;
    cta_text: Schema.Attribute.String & Schema.Attribute.Required;
    cta_type: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'download', 'subscribe', 'learn']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    cta_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFeaturesContentFormat extends Struct.ComponentSchema {
  collectionName: 'components_content_features_content_formats';
  info: {
    description: 'Alternative content formats and media';
    displayName: 'Content Format';
  };
  attributes: {
    format_description: Schema.Attribute.Text;
    format_duration: Schema.Attribute.String;
    format_type: Schema.Attribute.Enumeration<
      ['video', 'podcast', 'infographic', 'pdf', 'slides']
    > &
      Schema.Attribute.DefaultTo<'pdf'>;
    format_url: Schema.Attribute.String;
  };
}

export interface ContentFeaturesFreshnessIndicator
  extends Struct.ComponentSchema {
  collectionName: 'components_content_features_freshness_indicators';
  info: {
    description: 'Indicators for content update triggers and scheduling';
    displayName: 'Content Freshness Indicator';
  };
  attributes: {
    last_fact_check: Schema.Attribute.Date;
    next_review_date: Schema.Attribute.Date;
    update_trigger: Schema.Attribute.String;
  };
}

export interface ContentFeaturesInteractiveElement
  extends Struct.ComponentSchema {
  collectionName: 'components_content_features_interactive_elements';
  info: {
    description: 'Interactive content components';
    displayName: 'Interactive Element';
  };
  attributes: {
    element_data: Schema.Attribute.JSON;
    element_description: Schema.Attribute.Text;
    element_type: Schema.Attribute.Enumeration<
      ['calculator', 'quiz', 'checklist', 'tool']
    > &
      Schema.Attribute.DefaultTo<'tool'>;
  };
}

export interface ContentFeaturesInternalLink extends Struct.ComponentSchema {
  collectionName: 'components_content_features_internal_links';
  info: {
    description: 'Strategic internal linking for content clusters';
    displayName: 'Internal Link';
  };
  attributes: {
    link_context: Schema.Attribute.Text;
    link_text: Schema.Attribute.String;
    link_type: Schema.Attribute.Enumeration<
      ['supporting', 'related', 'deep-dive', 'reference']
    > &
      Schema.Attribute.DefaultTo<'related'>;
    link_url: Schema.Attribute.String;
  };
}

export interface GeoOptimizationEntityMention extends Struct.ComponentSchema {
  collectionName: 'components_geo_optimization_entity_mentions';
  info: {
    description: 'Structured entities for Knowledge Graph optimization';
    displayName: 'Entity Mention';
  };
  attributes: {
    entity_description: Schema.Attribute.Text;
    entity_name: Schema.Attribute.String & Schema.Attribute.Required;
    entity_type: Schema.Attribute.Enumeration<
      ['person', 'organization', 'product', 'concept', 'location']
    > &
      Schema.Attribute.DefaultTo<'concept'>;
    entity_url: Schema.Attribute.String;
  };
}

export interface GeoOptimizationKeyTakeaway extends Struct.ComponentSchema {
  collectionName: 'components_geo_optimization_key_takeaways';
  info: {
    description: 'Structured key points for AI understanding';
    displayName: 'Key Takeaway';
  };
  attributes: {
    takeaway_category: Schema.Attribute.Enumeration<
      ['insight', 'tip', 'warning', 'fact']
    > &
      Schema.Attribute.DefaultTo<'insight'>;
    takeaway_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LandingPageFeature extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_features';
  info: {
    description: 'Individual feature item';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface LandingPageFormField extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_form_fields';
  info: {
    description: 'Dynamic form field configuration';
    displayName: 'Form Field';
  };
  attributes: {
    defaultValue: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'This field is required'>;
    fieldLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    fieldName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    fieldOrder: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    fieldType: Schema.Attribute.Enumeration<
      [
        'text',
        'email',
        'tel',
        'number',
        'textarea',
        'select',
        'checkbox',
        'radio',
        'date',
        'time',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    isRequired: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    loopsFieldMapping: Schema.Attribute.String;
    options: Schema.Attribute.JSON;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    validationPattern: Schema.Attribute.String;
  };
}

export interface LandingPageHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_heroes';
  info: {
    description: 'Hero section for landing pages';
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    backgroundType: Schema.Attribute.Enumeration<
      ['color', 'gradient', 'image', 'video']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'color'>;
    headline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    heroImage: Schema.Attribute.Media<'images' | 'videos'>;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    subheadline: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface LandingPageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonials';
  info: {
    description: 'Customer testimonial';
    displayName: 'Testimonial';
  };
  attributes: {
    authorCompany: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    authorTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    quote: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

export interface LandingPageWebinarCta extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_webinar_ctas';
  info: {
    description: 'Call-to-action section for webinar registration with Loops.so integration';
    displayName: 'Webinar CTA';
  };
  attributes: {
    consentText: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }> &
      Schema.Attribute.DefaultTo<'I agree to receive marketing communications'>;
    ctaType: Schema.Attribute.Enumeration<
      ['webinar', 'download', 'signup', 'demo', 'contact']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'webinar'>;
    errorMessage: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }> &
      Schema.Attribute.DefaultTo<'Sorry, there was an error. Please try again.'>;
    formFields: Schema.Attribute.Component<'landing-page.form-field', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    loopsApiEndpoint: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://app.loops.so/api/v1/contacts/create'>;
    loopsListId: Schema.Attribute.String;
    privacyPolicyLink: Schema.Attribute.String;
    registrationFormIframe: Schema.Attribute.Text & Schema.Attribute.Required;
    speakerImage: Schema.Attribute.Media<'images'>;
    speakerName: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    speakerTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    submitButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<'Register for Webinar'>;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }> &
      Schema.Attribute.DefaultTo<'Thank you for registering! Check your email for confirmation.'>;
    webinarDate: Schema.Attribute.DateTime;
    webinarDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    webinarDuration: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'60 minutes'>;
    webinarId: Schema.Attribute.String & Schema.Attribute.Required;
    webinarTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface StructuredDataDataTable extends Struct.ComponentSchema {
  collectionName: 'components_structured_data_data_tables';
  info: {
    description: 'Structured tables for fact extraction';
    displayName: 'Data Table';
  };
  attributes: {
    table_caption: Schema.Attribute.Text;
    table_data: Schema.Attribute.JSON;
    table_summary: Schema.Attribute.Text;
    table_title: Schema.Attribute.String;
  };
}

export interface StructuredDataFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_structured_data_faq_sections';
  info: {
    description: 'FAQ schema for AI responses and rich snippets';
    displayName: 'FAQ Section';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    answer_summary: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StructuredDataHowToStep extends Struct.ComponentSchema {
  collectionName: 'components_structured_data_how_to_steps';
  info: {
    description: 'Step-by-step instructions for HowTo schema';
    displayName: 'How To Step';
  };
  attributes: {
    step_description: Schema.Attribute.RichText & Schema.Attribute.Required;
    step_duration: Schema.Attribute.String;
    step_image: Schema.Attribute.Media<'images'>;
    step_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ai-optimization.conversational-query': AiOptimizationConversationalQuery;
      'ai-optimization.model-compatibility': AiOptimizationModelCompatibility;
      'ai-optimization.same-as-profile': AiOptimizationSameAsProfile;
      'ai-optimization.speakable-content': AiOptimizationSpeakableContent;
      'authority.author-expertise': AuthorityAuthorExpertise;
      'authority.expert-quote': AuthorityExpertQuote;
      'authority.fact-check': AuthorityFactCheck;
      'authority.source-citation': AuthoritySourceCitation;
      'authority.statistic': AuthorityStatistic;
      'category.author': CategoryAuthor;
      'category.category': CategoryCategory;
      'category.instructor': CategoryInstructor;
      'category.tags': CategoryTags;
      'content-blocks.code-block': ContentBlocksCodeBlock;
      'content-blocks.cta-block': ContentBlocksCtaBlock;
      'content-blocks.image-block': ContentBlocksImageBlock;
      'content-blocks.quote-block': ContentBlocksQuoteBlock;
      'content-blocks.table-block': ContentBlocksTableBlock;
      'content-blocks.text-block': ContentBlocksTextBlock;
      'content-blocks.video-block': ContentBlocksVideoBlock;
      'content-features.call-to-action': ContentFeaturesCallToAction;
      'content-features.content-format': ContentFeaturesContentFormat;
      'content-features.freshness-indicator': ContentFeaturesFreshnessIndicator;
      'content-features.interactive-element': ContentFeaturesInteractiveElement;
      'content-features.internal-link': ContentFeaturesInternalLink;
      'geo-optimization.entity-mention': GeoOptimizationEntityMention;
      'geo-optimization.key-takeaway': GeoOptimizationKeyTakeaway;
      'landing-page.feature': LandingPageFeature;
      'landing-page.form-field': LandingPageFormField;
      'landing-page.hero': LandingPageHero;
      'landing-page.testimonial': LandingPageTestimonial;
      'landing-page.webinar-cta': LandingPageWebinarCta;
      'structured-data.data-table': StructuredDataDataTable;
      'structured-data.faq-section': StructuredDataFaqSection;
      'structured-data.how-to-step': StructuredDataHowToStep;
    }
  }
}
