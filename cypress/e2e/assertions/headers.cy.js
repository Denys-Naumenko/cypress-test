/// <reference types="cypress" />

describe("Registration form", () => {

        it("Header validation", () => {
            cy.visit("http://localhost:4200/auth/register");   // After homework 12 merged i will fix all urls
            cy.get('#title').should('contain.text', 'Register');
            cy.get('label[for="input-name"]').should('contain.text', 'Full name');
            cy.get('label[for="input-email"]').should('contain.text', 'Email address');
            cy.get('label[for="input-password"]').should('contain.text', 'Password');
            cy.get('label[for="input-re-password"]').should('contain.text', 'Repeat password');
    });
});