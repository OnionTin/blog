import { defineClientConfig } from "vuepress/client";
import Mermaid from "D:/Programs/web/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_katex@0.16.9_markdown-it@14.0.0_mermaid@10.9.0_vuepres_vb3peknvdkmtz5quqgdrhqm4n4/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/Programs/web/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_katex@0.16.9_markdown-it@14.0.0_mermaid@10.9.0_vuepres_vb3peknvdkmtz5quqgdrhqm4n4/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
  setup: () => {

  }
});
