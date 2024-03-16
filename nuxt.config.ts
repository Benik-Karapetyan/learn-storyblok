// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    // use: [apiPlugin],
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'es'],
    defaultLocale: 'en', // default locale
  },
});
