// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Get the user's access token from sessionStorage
export function getAccessTokenPromise() {
  // Works in Chrome, fails in Electron
  return new Promise(resolve => {
    cy.window().then(win => {
      const token = win.sessionStorage.getItem("token");
      resolve(token);
    });
  });
}

export function getAccessTokenCypressPromise() {
  // Works in Electron too, but can't be await'd
  return new Cypress.Promise(resolve => {
    cy.window().then(win => {
      const token = win.sessionStorage.getItem("token");
      resolve(token);
    });
  });
}
