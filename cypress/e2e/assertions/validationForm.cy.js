/// <reference types="cypress" />

describe("Registration form", () => {

    it("Validation Form", () => {
        cy.visit("http://localhost:4200/auth/register");   // After homework 12 merged i will fix all urls
        function verifyForm(selector, errorMessage) {
            cy.get(selector).as('selector').click();
            cy.get('#title').click();
            cy.get('@selector').next().should('contain.text', errorMessage);
        }
        verifyForm('#input-email', 'Email is required');
        verifyForm('#input-password', 'Password is required');
        verifyForm('#input-re-password', 'Password confirmation is required!');
    });
});