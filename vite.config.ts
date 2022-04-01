import { defineConfig } from "vite";
import { vitePlugin as malinaPlugin } from "malinajs-unplugin";
import { default as windiCSSPlugin } from "vite-plugin-windicss";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      malinaPlugin({
        debugLabel: mode === "development",
      }),
      windiCSSPlugin({
        scan: {
          fileExtensions: ["html", "ma", "xht"],
        },
      }),
    ],
    build: {
      target: "es2018",
      polyfillModulePreload: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: null,
          inlineDynamicImports: true,
        },
      },
    },
    esbuild: {
      charset: "utf8",
    },
  };
});
