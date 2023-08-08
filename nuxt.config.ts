// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
  },
  content: {
    highlight: {
      theme: "github-light",
      preload: ["cpp"],
    },
  },
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  ssr: true,
});
