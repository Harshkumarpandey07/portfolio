import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // ✅ Code splitting for better performance + Lighthouse scores
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          helmet: ["react-helmet-async"],
        },
      },
    },
    // ✅ Smaller chunk size warning threshold
    chunkSizeWarningLimit: 500,
    // ✅ Minify with esbuild (faster) or terser for smaller output
    minify: "esbuild",
    // ✅ Enable source maps for production debugging
    sourcemap: false,
    // ✅ Target modern browsers for smaller bundles
    target: "es2020",
  },

  // ✅ Preview server config
  preview: {
    port: 4173,
    host: true,
  },

  // ✅ Dev server
  server: {
    port: 5173,
    host: true,
  },
});
