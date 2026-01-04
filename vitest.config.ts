import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    alias: {
      // Point to the svelte5 export for testing-library
      '@testing-library/svelte': '@testing-library/svelte/svelte5'
    }
  },
  resolve: {
    // Force client-side Svelte exports, not server
    conditions: ['browser', 'svelte']
  }
});
