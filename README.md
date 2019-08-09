# Working with Promises in Cypress test cases

This repo was my attempt at repro'ing an issue I encountered with Cypress tests that used Promises. In the process, I learned of Cypress.Promise which gets around the issue I encountered with the embedded Electron browser (v61).

## To run the demo

Install dependencies:

    npm install

Run the test cases (they hit https://brucelefebvre.com/cypress-electron-window-issue/public/ by default, so no need to start a local webserver):

    npm test

## To note

- 
