# CLAUDE.md

## Project Context
- **Strapi CMS** - Headless content management system for AI-optimized content
- Standalone Strapi v5.23.4 application serving content via REST APIs
- Specialized for SEO/AI-optimized blog posts and webinar landing pages
- Content backend for Automatisera.tech frontend applications

## Tech Stack
- **Framework**: Strapi v5.23.4 (Node.js-based headless CMS)
- **Runtime**: Node.js 18.0.0+ (22.16.0 in production)
- **Package Manager**: Yarn
- **Database**: PostgreSQL (production), SQLite (development)
- **Media Storage**: Cloudinary v5.23.4 provider
- **Admin UI**: React 18.2.0, React Router v6.8.0, Styled Components v6.0.0

## Project Purpose
This CMS is designed to create and manage:
1. **AI/SEO-Optimized Blog Posts** - Content optimized for LLM visibility and search engines
2. **Webinar Landing Pages** - Registration pages with form integration
3. **Structured Content** - Rich metadata, citations, fact-checks, and authority scoring
4. **Multi-format Content** - Dynamic blocks including text, images, code, videos, CTAs

## Commands
```bash
# Development
yarn dev              # Start Strapi dev server with auto-reload (http://localhost:1337)
yarn develop          # Alias for 'yarn dev'

# Production
yarn build            # Build for production
yarn start            # Start production server

# Utilities
yarn strapi           # Direct access to Strapi CLI
```

## Project Structure
```
strapi-cms/
├── config/                          # Strapi configuration
│   ├── admin.js                    # Admin panel config with preview URLs
│   ├── api.js                      # REST API configuration (limits, pagination)
│   ├── database.js                 # Database driver (postgres/sqlite)
│   ├── server.js                   # Server config (host: 0.0.0.0, port: 1337)
│   ├── plugins.js                  # Cloudinary upload provider
│   ├── middlewares.js              # Middleware stack (CORS, security, etc.)
│   └── env/                        # Environment-specific configs
├── src/
│   ├── api/                        # Content type definitions
│   │   ├── post/                   # Blog posts with 60+ fields
│   │   │   ├── content-types/     # Schema definition
│   │   │   ├── controllers/       # Custom API logic
│   │   │   └── routes/            # API endpoints
│   │   ├── landing-page/           # Webinar landing pages
│   │   ├── category/               # Post categories taxonomy
│   │   └── tag/                    # Post tags (many-to-many)
│   ├── components/                 # Reusable content components (34 total)
│   │   ├── ai-optimization/        # AI training, model compatibility
│   │   ├── authority/              # Citations, fact-checks, sources
│   │   ├── content-blocks/         # Text, image, code, video blocks
│   │   ├── content-features/       # CTAs, internal links, freshness
│   │   ├── geo-optimization/       # Keywords, entities, takeaways
│   │   ├── landing-page/           # Hero, CTA, testimonials, forms
│   │   ├── structured-data/        # FAQ, How-To, data tables
│   │   └── category/               # Category metadata
│   ├── extensions/                 # Plugin extensions
│   │   └── users-permissions/      # Auth customizations
│   └── admin/                      # Admin panel customizations
├── types/generated/                # Auto-generated TypeScript types
├── public/                         # Static assets
│   └── uploads/                    # Cloudinary-synced uploads
├── .env                            # Environment variables
├── package.json                    # Dependencies
├── render.yaml                     # Render.com deployment config
└── create-post.sh                  # Example API script
```

## Content Model Architecture

### Main Content Types

**1. Posts (`api::post.post`)**
Collection type with 60+ fields covering:
- **Core Content**: title, slug, excerpt, richtext body, featured image
- **Dynamic Blocks**: text, tables, images, code snippets, videos, CTAs
- **AI Optimization**: semantic keywords, entity mentions, training context, model flags
- **Authority**: citations, fact-checks, expert quotes, statistics, peer review
- **Structured Data**: FAQ sections, how-to steps, JSON-LD schema markup
- **Metadata**: meta title/description, OG tags, canonical URL, Twitter cards
- **Relationships**: categories (many-to-one), tags (many-to-many), related posts
- **Analytics**: view count, read time, word count, authority score (1-100)

**2. Landing Pages (`api::landing-page.landing-page`)**
Webinar-focused landing pages with:
- **Hero Section**: customizable backgrounds, headlines, subheadlines
- **Features Section**: up to 12 feature cards with icons
- **Testimonials**: up to 10 testimonials with photos
- **Webinar CTA**: integrated form with Loops.so email integration
- **Form Builder**: custom fields (text, email, tel, select, textarea, checkbox)
- **Registration**: iframe embedding support for external forms
- **A/B Testing**: variant support
- **Tracking**: custom CSS/JS, tracking pixels

**3. Categories (`api::category.category`)**
- Taxonomy for organizing posts
- One-to-many relationship with posts
- SEO metadata fields

**4. Tags (`api::tag.tag`)**
- Many-to-many relationship with posts
- Color coding support
- Cross-category tagging

### Reusable Components (34 total)

**Landing Page Components:**
- Hero, Feature Card, Testimonial, Webinar CTA, Form Field

**AI Optimization:**
- Conversational Queries, Model Compatibility, Speakable Content, Training Context

**Authority:**
- Author Expertise, Expert Quotes, Fact Checks, Statistics, Citations

**Content Features:**
- Internal Links, CTAs, Freshness Indicators, Interactive Elements

**Structured Data:**
- FAQ Sections, How-To Steps, Data Tables, JSON-LD

**Content Blocks:**
- Text Block, Image, Code Snippet, Quote, Video, CTA Button, Table

## Environment Variables

### Required (Production)
```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname
DATABASE_CLIENT=postgres

# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Security (generate secure random strings)
APP_KEYS=key1,key2,key3,key4         # Comma-separated encryption keys
ADMIN_JWT_SECRET=random_secret        # Admin authentication
JWT_SECRET=random_secret              # API token authentication
API_TOKEN_SALT=random_salt            # API token generation
TRANSFER_TOKEN_SALT=random_salt       # Transfer token generation
```

### Optional (Media Storage)
```bash
# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

### Optional (Preview Integration)
```bash
# Frontend preview links
CLIENT_URL=http://localhost:5173     # Frontend app URL
PREVIEW_SECRET=secure_random_string  # Preview validation token
```

## Configuration Details

### Database (`config/database.js`)
- **Production**: PostgreSQL with connection string parsing
- **Development**: SQLite (default, no setup required)
- SSL support for secure connections
- Switch via `DATABASE_CLIENT` env var

### Server (`config/server.js`)
- Host: `0.0.0.0` (all network interfaces)
- Port: `1337` (Strapi default)
- App keys for encryption
- Admin URL configuration

### Admin Panel (`config/admin.js`)
- JWT-based authentication
- Content preview enabled
- Preview URL mapping to frontend:
  - Landing pages → `${CLIENT_URL}/lp/${slug}`
  - Posts → `${CLIENT_URL}/post/${slug}`
  - Pages → `${CLIENT_URL}/pages/${slug}`

### API Settings (`config/api.js`)
- Default limit: 25 items per request
- Maximum limit: 100 items per request
- Count enabled by default (total records in response)

### Plugins (`config/plugins.js`)
- Cloudinary upload provider for media management
- Credentials via environment variables

## REST API Endpoints

Strapi auto-generates REST endpoints for all content types:

```bash
# Posts
GET    /api/posts              # List all posts (paginated)
GET    /api/posts/:id          # Get single post
POST   /api/posts              # Create post (requires API token)
PUT    /api/posts/:id          # Update post (requires API token)
DELETE /api/posts/:id          # Delete post (requires API token)

# Landing Pages
GET    /api/landing-pages      # List all landing pages
GET    /api/landing-pages/:id  # Get single landing page
POST   /api/landing-pages      # Create (requires API token)
PUT    /api/landing-pages/:id  # Update (requires API token)

# Categories
GET    /api/categories         # List all categories
GET    /api/categories/:id     # Get single category

# Tags
GET    /api/tags               # List all tags
GET    /api/tags/:id           # Get single tag
```

### Query Parameters
All endpoints support:
- **Filtering**: `?filters[field][$eq]=value`
- **Sorting**: `?sort=field:asc`
- **Pagination**: `?pagination[page]=1&pagination[pageSize]=25`
- **Population**: `?populate=*` or `?populate[0]=categories&populate[1]=tags`
- **Fields**: `?fields[0]=title&fields[1]=slug`
- **Publication State**: `?publicationState=preview` (draft + published)

### Authentication
- **Public Access**: Read endpoints are public by default
- **API Tokens**: Required for create/update/delete operations
- Generate in Admin Panel: Settings → API Tokens → Create new token
- Use in requests: `Authorization: Bearer YOUR_TOKEN`

## Development Workflow

1. **Start Development Server**
   ```bash
   yarn dev
   ```
   - Server runs at http://localhost:1337
   - Admin panel at http://localhost:1337/admin
   - Auto-reload on file changes

2. **Access Admin Panel**
   - Navigate to http://localhost:1337/admin
   - Create admin account on first launch
   - Manage content types, create content, configure settings

3. **Create Content**
   - Via Admin UI: Content Manager → Create New Entry
   - Via REST API: Use API tokens for authentication
   - Via Scripts: See `create-post.sh` for examples

4. **Preview Content**
   - Click "Preview" button in Admin Panel
   - Opens content in connected frontend (CLIENT_URL)
   - Requires preview secret validation

5. **API Integration**
   - Generate API token in Settings
   - Use token for authenticated requests
   - Populate relations as needed (`?populate=*`)

## Deployment Configuration

### Render.com (`render.yaml`)
- **Service Type**: Node.js web service
- **Build Command**: `yarn install && yarn build`
- **Start Command**: `yarn start`
- **Health Check**: `/_health` endpoint
- **Database**: Linked PostgreSQL database (basic-256mb plan)
- **Environment**: Auto-generated JWT secrets, manual Cloudinary config
- **Auto-Deploy**: Disabled (manual deployments)

### Database Management
- **PostgreSQL**: Managed database on Render.com
- **Migrations**: Strapi handles schema migrations automatically
- **Backups**: Managed by Render.com
- **Connection**: Via `DATABASE_URL` connection string

## Key Features & Use Cases

### 1. AI Content Optimization
- LLM visibility metrics (relevance score, semantic density)
- AI training context fields for model fine-tuning
- Platform-specific optimization (Perplexity, ChatGPT, custom models)
- Semantic keyword mapping and entity mentions
- Conversational query targeting

### 2. SEO Optimization
- Comprehensive meta tags (title, description, OG, Twitter)
- Structured data (JSON-LD, FAQ schema, How-To schema)
- Featured snippet targeting
- Voice search optimization
- Canonical URL management
- Breadcrumb navigation support

### 3. Webinar Management
- Integrated form builder with validation
- Loops.so email service integration for registrations
- Registration form iframe embedding
- Webinar metadata (date, speaker, duration, timezone)
- CTA variants (webinar, download, signup, demo, contact)
- A/B testing for landing pages

### 4. Content Authority
- Peer review tracking with revision history
- Expert quote attribution
- Citation management with source links
- Fact-checking history
- Statistical data with sources
- Authority scoring (1-100 scale)

### 5. Content Analytics
- View count tracking
- Read time estimation (words ÷ reading speed)
- Word count automation
- Performance metrics per post
- A/B test variant performance

## Development Guidelines

### Content Type Design
1. **Schema First**: Design content types before creating content
2. **Component Reuse**: Use components for repeated structures
3. **Relations**: Use proper relation types (one-to-many, many-to-many)
4. **Field Validation**: Configure validation in admin panel
5. **Default Values**: Set sensible defaults for optional fields

### API Best Practices
1. **Populate Relations**: Always specify which relations to populate
2. **Pagination**: Use pagination for large result sets
3. **Filtering**: Server-side filtering is more efficient than client-side
4. **Field Selection**: Request only needed fields to reduce payload
5. **Authentication**: Use API tokens for all write operations

### Media Management
1. **Cloudinary**: All media uploads go to Cloudinary CDN
2. **Image Optimization**: Cloudinary handles transformations automatically
3. **Responsive Images**: Use Cloudinary URL parameters for different sizes
4. **Video Hosting**: Store videos on Cloudinary or embed from external sources

### Performance
1. **Database Indexing**: Strapi handles indexing automatically
2. **Query Optimization**: Use populate wisely to avoid over-fetching
3. **Caching**: Consider implementing Redis for API response caching
4. **CDN**: Cloudinary CDN for all media assets

## Git Workflow
- Work on feature branches
- Merge to `master` for production deployment
- Commit messages: descriptive and actionable
- Never commit `.env` or secrets

## Environment Setup
- **Path**: `C:\Users\Linus\dev\strapi-cms`
- **Admin Panel**: http://localhost:1337/admin
- **API Base**: http://localhost:1337/api
- **Health Check**: http://localhost:1337/_health

## Validation Gates
```bash
# Before deployment
yarn build                      # Ensure production build succeeds
# Test API endpoints manually or with Postman
# Verify preview links work with frontend
```

## Do Not Touch
- `node_modules/` - Managed by Yarn
- `build/` - Production build output
- `.cache/` - Strapi cache files
- `.tmp/` - Temporary files
- `types/generated/` - Auto-generated TypeScript types
- `.strapi/` - Strapi internal files

## Common Tasks

### Adding New Content Types
1. Navigate to Content-Type Builder in admin panel
2. Create new collection or single type
3. Add fields with appropriate types and validations
4. Configure relationships if needed
5. Save and restart server (dev mode auto-restarts)
6. Set permissions in Settings → Roles

### Adding Components
1. Go to Content-Type Builder → Components
2. Create new component with category
3. Add fields to component
4. Use component in content types via "Component" field type
5. Choose repeatable or non-repeatable

### API Token Management
1. Settings → API Tokens → Create new token
2. Set token type (read-only, full-access, custom)
3. Set expiration (never, date-based)
4. Configure permissions per content type
5. Copy token (shown only once)

### Preview Configuration
1. Set `CLIENT_URL` in `.env`
2. Configure preview paths in `config/admin.js`
3. Implement preview validation in frontend
4. Use preview secret for security

### Database Migrations
- Strapi handles migrations automatically
- Schema changes tracked in `.strapi/` directory
- Database syncs on server start
- Backup database before major schema changes

## Security Rules
- Never commit `.env` file or secrets
- Use environment variables for all sensitive config
- Rotate API tokens regularly
- Set appropriate permissions per role
- Use HTTPS in production
- Configure CORS properly in `config/middlewares.js`
- Validate all user inputs (Strapi handles this)
- Keep Strapi and dependencies updated

## Integration with Frontend
This CMS serves content to client applications via REST API:
1. Frontend requests content from API endpoints
2. Use API tokens for authenticated requests
3. Populate relations as needed
4. Handle draft/published states
5. Implement preview mode with secret validation
6. Cache responses for better performance

## Troubleshooting

### Server Won't Start
- Check `.env` file exists and has all required variables
- Verify database connection (PostgreSQL URL)
- Clear cache: delete `.cache/` and `.tmp/`
- Check port 1337 is not in use

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check PostgreSQL service is running
- Test connection string manually
- Ensure SSL settings match database requirements

### Cloudinary Upload Fails
- Verify Cloudinary credentials in `.env`
- Check Cloudinary account quota
- Test credentials in Cloudinary dashboard
- Review upload provider config in `config/plugins.js`

### Preview Not Working
- Verify `CLIENT_URL` is set correctly
- Check frontend implements preview endpoint
- Ensure preview secret matches between CMS and frontend
- Test preview URL manually

## MCP Tools Available
While working on this Strapi CMS project, you have access to:
- **Supabase**: For external database operations (if needed for frontend integration)
- **Slack**: For notifications when pushing to production
- **ClickUp**: For project management and task tracking
- **Context7**: For up-to-date Strapi documentation
- **Brave Search**: For researching Strapi best practices

## Additional Resources
- **Strapi Documentation**: https://docs.strapi.io
- **Strapi v5 Changelog**: https://strapi.io/changelog
- **REST API Reference**: https://docs.strapi.io/dev-docs/api/rest
- **Content Type Builder**: https://docs.strapi.io/user-docs/content-type-builder
- **Cloudinary Docs**: https://cloudinary.com/documentation
