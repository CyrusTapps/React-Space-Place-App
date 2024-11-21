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
    https: {
      key: fs.readFileSync("./localhost-key.pem"), // Path to your private key
      cert: fs.readFileSync("./localhost-cert.pem"), // Path to your certificate
    },
    port: 5173, // Default port
    host: true, // Allows network access
  },
});
