import { defineConfig } from 'vite'
import { dirname, resolve } from 'path';
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src', 'styles'),
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@assets': resolve(__dirname, 'src', 'assets'),
      '@common': resolve(__dirname, 'src', 'common'),
      '@components': resolve(__dirname, 'src', 'components'),
    }
  }
});
