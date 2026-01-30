// #region Imports

/* Vite */
import { defineConfig } from 'vite';

/* Vite Plugins */
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

/* Tailwind */
import tailwindcss from "@tailwindcss/vite";

// #endregion Imports

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7070,
    host: true,
    hmr: {
      host:       'localhost',
      clientPort: 7070
    },
    watch: {
      usePolling: true, 
      interval:   200
    }
  },
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    svgr({
      include: "**/*.svg"
    })
  ],
})
