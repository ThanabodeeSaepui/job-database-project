import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const root = resolve(
  __dirname,
  "../",
  "../",
  "./apps",
  "./api",
  "./dist",
  "./public"
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: root,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        // manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: "[name].js", // currently does not work for the legacy bundle
        assetFileNames: "[name].[ext]", // currently does not work for images
      },
    },
  },
});
