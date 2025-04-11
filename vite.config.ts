import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $assets: path.resolve(__dirname, "./src/assets"),
      $components: path.resolve(__dirname, "./src/components"),
      $lib: path.resolve("./src/lib"),
    }
  }
})
