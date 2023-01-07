import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    // Build Chrome Extension
    crx({ manifest }),
  ],
  build: {
    // dont minify the code
    minify: false,
  },
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@stores": "/src/stores",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@backgroundScripts": "/src/backgroundScripts",
    },
  },
});
