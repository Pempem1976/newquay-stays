import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Base a GitHub repo nevére mutat (pl. newquay-stays)
  // Ez biztosítja, hogy az assetek helyesen töltődjenek be
  base: "/newquay-stays/",

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

