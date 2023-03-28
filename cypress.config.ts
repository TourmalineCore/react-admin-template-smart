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
    CORRECT_URL: `https://jsonplaceholder.typicode.com/users`,
  },
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
    viewportHeight: 600,
    viewportWidth: 1000,
  },
});
