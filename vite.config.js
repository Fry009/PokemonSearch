import { defineConfig } from 'vite';
import { viteBabelPlugin } from './plugins/vite-plugin-babel.js'; 

export default defineConfig({
  plugins: [viteBabelPlugin()]
});
