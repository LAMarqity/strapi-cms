module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'u79yynUmlNlIJTPaayiyfQ=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('PUBLIC_ADMIN_URL', '/admin'),
});
