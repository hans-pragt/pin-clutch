// #region Imports

/* Vite */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/* Tailwind */
import tailwindcss from "@tailwindcss/vite";

// #endregion Imports

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7070
  },
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss()
  ],
})
