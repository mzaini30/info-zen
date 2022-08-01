
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown, { meta } from "vite-plugin-md";
import Layouts from "vite-plugin-vue-layouts";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages";
const unocss = __unconfig_stub;;
import yaml from "vite-plugin-yaml2";
import apply from "@unocss/transformer-directives";
import generateSitemap from "vite-plugin-pages-sitemap";
import Prism from "markdown-it-prism";

const hostname = "http://localhost:3000/";

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  plugins: [
    yaml(),
    unocss({
      transformers: [apply()],
    }),
    legacy(),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    pages({
      onRoutesGenerated: (routes) => generateSitemap({ routes, hostname }),
      extensions: ["vue", "md"],
    }),
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
      },
    }),
    Layouts(),
  ],
});

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;