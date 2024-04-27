// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    // Options
    viewer: false
  }
})
