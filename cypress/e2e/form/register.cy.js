/// <reference types="cypress" />

describe("Registration form", () => {
    const name = "Denys";
    const passwd = "password";
    const email = "test@example.com";

    it("Filling Form", () => {
        cy.visit('pages/auth/register');
        cy.get('.form-control-group').parent().within(() => {
            cy.contains('Full name').type(name);
            cy.contains('Email').type(email);
            cy.contains('Password').type(passwd);
            cy.contains('Repeat password').type(passwd);
            cy.get('span.custom-checkbox').click();
            cy.contains('Register').click();
        })
    });
});