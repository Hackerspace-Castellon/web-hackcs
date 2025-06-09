// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://token-template.deno.dev",

  i18n: {
    defaultLocale: "es",
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(
            ([key, value]) => [key, value.lang ?? key]
          )
        ),
      },
    })
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },

  adapter: netlify(),
});