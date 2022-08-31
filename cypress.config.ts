import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1600,
  defaultCommandTimeout: 4000,
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    specPattern: 'cypress/e2e/*.*',
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: 'cypress/components/*.*',
  },
});
