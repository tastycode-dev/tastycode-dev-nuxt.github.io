// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  ssr: true,
});
