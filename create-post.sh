#!/bin/bash

# Strapi API endpoint
BASE_URL="http://localhost:1337"

# First, you need to create an API token in Strapi Admin Panel
# Go to Settings > API Tokens > Create new API Token
# Give it a name and full access permissions
# Copy the token and replace YOUR_API_TOKEN below

API_TOKEN="YOUR_API_TOKEN"

# Create a comprehensive AI/GEO optimized post
curl -X POST "$BASE_URL/api/posts" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "title": "🚀 Complete Guide to AI-Powered Content Marketing in 2025",
      "slug": "complete-guide-ai-powered-content-marketing-2025",
      "excerpt": "Discover how artificial intelligence is revolutionizing content marketing strategies. Learn practical AI tools, implementation strategies, and real-world case studies from industry leaders to transform your content operations.",
      "content": "## Introduction to AI-Powered Content Marketing\n\nArtificial intelligence has fundamentally transformed how businesses approach content marketing. This comprehensive guide explores cutting-edge AI strategies, tools, and implementations that leading companies use to scale their content operations.\n\n### What You Will Learn\n\n- How to leverage AI for content creation and optimization\n- Advanced personalization techniques using machine learning\n- Real-world case studies from Fortune 500 companies\n- Step-by-step implementation strategies\n- ROI measurement and optimization frameworks\n\n## The Evolution of Content Marketing\n\nContent marketing has evolved from simple blog posts to sophisticated, AI-driven ecosystems...",
      "ai_summary": "This comprehensive guide covers AI-powered content marketing strategies for 2025, including practical tools like GPT-4, Claude, and specialized marketing AI platforms. Learn how to implement AI workflows, measure ROI, and scale content operations efficiently while maintaining quality and authenticity.",
      "semantic_keywords": "AI content marketing, machine learning content strategy, GPT-4 marketing, Claude AI content, automated content creation, AI SEO optimization, content personalization AI, marketing automation tools, AI content analytics, predictive content performance",
      "content_type_classification": "guide",
      "expertise_level": "intermediate",
      "primary_schema_type": "article",
      "meta_title": "AI Content Marketing Guide 2025: Tools, Strategies & Case Studies",
      "meta_description": "Master AI-powered content marketing with our comprehensive 2025 guide. Learn practical strategies, tools, and real-world implementations from industry leaders.",
      "featured_snippet_target": "AI content marketing uses machine learning and natural language processing to automate content creation, personalization, and optimization, improving efficiency by up to 70% while maintaining quality.",
      "content_authority_score": 95,
      "peer_reviewed": true,
      "voice_search_optimized": true,
      "perplexity_optimized": true,
      "chatgpt_friendly": true,
      "ai_training_context": "This content is optimized for AI training models with structured data, clear hierarchies, comprehensive coverage, authoritative sources, and semantic richness. It includes practical examples, step-by-step guides, and real-world applications.",
      "related_entities": "OpenAI, Anthropic, Google AI, Microsoft Copilot, Jasper AI, Copy.ai, Writesonic, MarketMuse, Clearscope, Surfer SEO, HubSpot, Salesforce Einstein, Adobe Sensei",
      "json_ld_schema": {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Complete Guide to AI-Powered Content Marketing in 2025",
        "author": {
          "@type": "Organization",
          "name": "Marqity"
        },
        "datePublished": "2025-01-12",
        "dateModified": "2025-01-12",
        "publisher": {
          "@type": "Organization",
          "name": "Marqity",
          "logo": {
            "@type": "ImageObject",
            "url": "https://marqity.com/logo.png"
          }
        }
      },
      "breadcrumb_structure": {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://marqity.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Marketing",
            "item": "https://marqity.com/marketing"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Content Marketing Guide",
            "item": "https://marqity.com/marketing/ai-content-marketing-guide"
          }
        ]
      },
      "ai_visibility_metrics": {
        "llm_relevance_score": 98,
        "semantic_density": 0.85,
        "entity_coverage": 0.92,
        "factual_accuracy": 0.99,
        "source_authority": 0.95
      },
      "geo_performance_score": 88,
      "competitor_analysis": {
        "top_competitors": ["contentmarketinginstitute.com", "hubspot.com/marketing", "neilpatel.com"],
        "content_gap_opportunities": ["AI tool comparisons", "ROI calculators", "Implementation templates"],
        "competitive_advantages": ["Comprehensive coverage", "2025 focus", "Practical examples"]
      },
      "read_time": 25,
      "word_count": 4500,
      "view_count": 0,
      "sort_order": 1,
      "allow_comments": true,
      "newsletter_sent": false,
      "table_of_contents": true,
      "llm_optimization_notes": "Content structured for optimal AI comprehension with clear headings, bullet points, numbered lists, and semantic HTML. Includes FAQ schema, How-To steps, and comprehensive entity mentions for maximum LLM visibility.",
      "content_evolution_log": {
        "versions": [
          {
            "version": "1.0",
            "date": "2025-01-12",
            "changes": "Initial publication with comprehensive AI marketing coverage"
          }
        ]
      },
      "status": "draft",
      "featured": true,
      "publish_date": "2025-01-12T10:00:00.000Z"
    }
  }'

echo ""
echo "Post creation request sent!"
echo ""
echo "Note: You need to:"
echo "1. Start Strapi: npm run dev"
echo "2. Create an API token in Admin Panel: Settings > API Tokens"
echo "3. Replace YOUR_API_TOKEN in this script"
echo "4. Run this script: bash create-post.sh"