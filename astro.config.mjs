import { defineConfig } from 'astro/config';
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import alpinejs from "@astrojs/alpinejs";
import compressor from "astro-compressor";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: ["jay-software.com"]
    },
    imageService: true,
    isr: {
      expiration: 60 * 60 * 24
    }
  }),
  site: "https://jay-software.com",
  integrations: [
    tailwind(), sitemap(), playformCompress(), alpinejs(), compressor(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});