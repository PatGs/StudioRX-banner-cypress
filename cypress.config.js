/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/

const { defineConfig } = require('cypress');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  video: true, // Ativa gravação
  videosFolder: 'cypress/videos', // Pasta onde serão salvos
  videoCompression: 32, // Compressão (quanto menor, mais qualidade)
  screenshotOnRunFailure: true, // Faz screenshot se der erro
  e2e: {
    setupNodeEvents(on, config) {
    addMatchImageSnapshotPlugin(on, config);
    },
  },
});