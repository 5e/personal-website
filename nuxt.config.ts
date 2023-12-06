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
    "@nuxtjs/supabase",
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
      Inter: true,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  supabase: {
    url: "https://rjghsdhobisxfxxrlusw.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2hzZGhvYmlzeGZ4eHJsdXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzMwOTksImV4cCI6MjAxMzE0OTA5OX0.VlU8Uo6dpAnOCEE2P99tQLhrm8n-DxExaiB11-Bps1Q",
    redirect: false,
    redirectOptions: {
      login: "/",
      callback: "/confirm",
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
