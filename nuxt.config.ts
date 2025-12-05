// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    // baseURL: "/nuxt-app/",
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Pawlowski",
      link: [{ rel: "icon", type: "image/ico", href: "favicon.ico" }],
    },
  },
});
