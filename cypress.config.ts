import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:4173',
        //experimentalSessionAndOrigin: true,
        viewportWidth: 1920,
        viewportHeight: 1080,
        specPattern: "cypress/e2e/**/*.cy.ts",
    },
    video: false,
});