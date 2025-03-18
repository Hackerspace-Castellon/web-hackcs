// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://Marina-Pilar/hackscs-pruebas", // Cambia esto según tu repo
  base: "/hackscs-pruebas/", // Añade la base si usas GitHub Pages
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },
});

