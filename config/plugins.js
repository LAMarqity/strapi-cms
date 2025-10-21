module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'sv',
      locales: ['sv', 'en'], // Swedish and English (Swedish is default)
    },
  },
});