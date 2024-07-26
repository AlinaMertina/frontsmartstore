import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import rollupNodePolyfills from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  define: {
    global: 'window',  // Assigner `global` à `window` pour éviter `undefined`
  },
  resolve: {
    alias: {
      // Ajouter d'autres alias si nécessaire
    },
  },
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));

