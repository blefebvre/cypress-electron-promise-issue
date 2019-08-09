/// <reference types="Cypress" />
import {
  getAccessTokenPromise,
  getAccessTokenCypressPromise
} from "../support";

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Read from sessionStorage, no Promises", async () => {
    // Works as expected on both Chrome and Electron
    cy.window().then(win => {
      const token = win.sessionStorage.getItem("token");
      cy.log(`🔖 token, read directly without promises: ${token}`);
    });
  });

  it("Read from sessionStorage, with native Promises", async () => {
    // Not working in Electron: fails to read from sessionStorage
    getAccessTokenPromise().then(token2 => {
      cy.log(`🔖 token, via Promise.then(): ${token2}`);
    });

    // Can't await for the Cypress/Bluebird type Promises (https://docs.cypress.io/api/utilities/promise.html#Examples)
    const token3 = await getAccessTokenPromise();
    cy.log(`🔖 token, via await: ${token3}`);

    cy.log(`Both attempts finished`);
  });

  it("Read from sessionStorage, with Cypress.Promise", async () => {
    // Not working in Electron: fails to read from sessionStorage
    getAccessTokenCypressPromise().then(token2 => {
      cy.log(`🔖 token, via Promise.then(): ${token2}`);
    });

    // Can't await for the Cypress/Bluebird type Promises (https://docs.cypress.io/api/utilities/promise.html#Examples)
    const token3 = await getAccessTokenCypressPromise();
    cy.log(`🔖 token, via await: ${token3}`);

    cy.log(`Both attempts finished`);
  });
});
