/// <reference types="cypress" />

describe("Registration form", () => {
    const name = "Denys";
    const passwd = "password";
    const email = "test@example.com";

    it("Filling Form", () => {
        cy.visit("http://localhost:4200/auth/register");   // After homework 12 merged i will fix all urls
        cy.get('#input-name').type(name).should('have.value', name);
        cy.get('#input-email').type(email).should('have.value', email);
        cy.get('#input-password').type(passwd).should('have.value', passwd);
        cy.get('#input-re-password').type(passwd).should('have.value', passwd);
        cy.get('span.custom-checkbox').click();
        cy.get('form > div.form-control-group.accept-group > nb-checkbox').should('have.attr', 'ng-reflect-model', 'true');
        cy.get('nb-register > section.links > div > a.github.with-icon').should('be.visible');
        cy.get('nb-register > section.links > div > a.facebook.with-icon').should('be.visible');
        cy.get('nb-register > section.links > div > a.twitter.with-icon').should('be.visible');
        cy.get('nb-register > form > button').click();
    });
});