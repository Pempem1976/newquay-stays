import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Mivel a Pages a /docs mappát szolgálja ki gyökérként,
  // a base legyen relatív, így az assetek helyesen töltődnek be
  base: "./",

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
    // Az assetek a dist/assets/ mappába kerülnek
    assetsDir: "assets",
  },
}));
