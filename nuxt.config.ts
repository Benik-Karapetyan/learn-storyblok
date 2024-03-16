// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
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
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
});
