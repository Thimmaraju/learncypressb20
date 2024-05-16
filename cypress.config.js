const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //specPattern: "**/*.raju.js",
    screenshotsFolder: "cypress/pics",
    videosFolder: "cypress/ramesh",
    'baseUrl':"https://opensource-demo.orangehrmlive.com",
    //'defaultCommandTimeout': 20000,
    'pageLoadTimeout': 120000,
    retries: {openMode:1,runMode: 2},
    // "viewportWidth":375,
    // "viewportHeight": 667,
    "video":true,
    env: {
      
      "username": "Raju",
      "password": "admin123"


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
  
});
