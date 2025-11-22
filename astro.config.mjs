import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});
