import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/', // Base URL for your project
  build: {
    outDir: './docs', // Output directory for built files
  },
});
