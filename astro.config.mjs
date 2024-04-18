import { defineConfig } from 'astro/config';
import vercelStatic from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  integrations: [tailwind()]
});