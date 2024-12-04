import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Retain optimization for model-viewer
  optimizeDeps: {
    include: ["@google/model-viewer"],
  },

  // Add HTTPS configuration
  server: {
    port: 5173, // Default port
    host: true, // Allows network access
  },
});
