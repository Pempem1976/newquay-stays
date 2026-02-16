Rendben, itt van egy GitHub Pages-re optimalizált vite.config.ts React projekthez, ami az AVIF és egyéb asseteket is megfelelően kezeli:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ← Cseréld le "REPO_NAME"-t a GitHub repo nevedre
  base: "/REPO_NAME/",

  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // assetek kimeneti mappája
    assetsDir: "assets",
  },
}));
