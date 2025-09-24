module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'u79yynUmlNlIJTPaayiyfQ=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('PUBLIC_ADMIN_URL', '/admin'),
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env('CLIENT_URL', 'http://localhost:5173'),
      async handler(uid, { documentId, locale, status }) {
        const secret = env('PREVIEW_SECRET', 'your-preview-secret-key');
        const clientUrl = env('CLIENT_URL', 'http://localhost:5173');

        // Map content types to preview paths
        const getPreviewPathname = (uid, documentId) => {
          switch (uid) {
            case 'api::landing-page.landing-page':
              // Check if this is a webinar-type landing page by looking at the content
              // For now, we'll route all landing pages to the same preview
              return `/preview/landing-page/${documentId}`;
            case 'api::post.post':
              return `/preview/post/${documentId}`;
            case 'api::page.page':
              return `/preview/page/${documentId}`;
            default:
              return `/preview/${uid.replace('api::', '').replace('.', '/')}/${documentId}`;
          }
        };

        const pathname = getPreviewPathname(uid, documentId);
        const params = new URLSearchParams({
          secret,
          documentId,
          locale: locale || 'en',
          status: status || 'draft',
          contentType: uid,
        });

        return `${clientUrl}${pathname}?${params.toString()}`;
      },
    },
  },
});
