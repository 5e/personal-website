// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Pawlowski",
      link: [{ rel: "icon", type: "image/ico", href: "favicon.ico" }],
    },
  },
});
