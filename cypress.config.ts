import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:5173`,
    video: false,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  env: {
    APP_URL: `https://jsonplaceholder.typicode.com`,
    USER_ID: 5,
  },
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
    viewportHeight: 600,
    viewportWidth: 1000,
    // that it quickly fails during the workshop
    defaultCommandTimeout: 500,
  },
});
