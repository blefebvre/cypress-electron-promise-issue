# Working with Promises in Cypress test cases

This repo was my attempt at repro'ing an issue I encountered with Cypress tests that used Promises. In the process, I learned of `Cypress.Promise` which gets around Promise-based issues in the Electron browser (v61).

## To run the demo

Install dependencies:

    npm install

Run the test cases (they hit https://brucelefebvre.com/cypress-electron-promise-issue/public/ by default, so no need to start a local webserver):

    npm test

Once Cypress opens up, select either Chrome or the Electron browser, and click "Run all specs".

## To note

- All test cases run successfully on Chrome 76:
![Chrome window showing all tests passing, with the correct log statements too](https://raw.githubusercontent.com/blefebvre/cypress-electron-promise-issue/master/img/chrome.png)

- In Electron, the test cases involving Native Promise and `await` seem to get stuck, _but still pass!_
![Electron browser window showing all tests passing, with log statements missing](https://raw.githubusercontent.com/blefebvre/cypress-electron-promise-issue/master/img/electron.png)
