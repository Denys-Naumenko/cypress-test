export class AuthRegisterPage {

    title() {
        return cy.get('#title');
    }

    nameInputLabel() {
        return cy.get('label[for="input-name"]');
    }
    
    nameInput() {
        return cy.get('#input-name');
    }

    emailInputLabel() {
        return cy.get('label[for="input-email"]');
    }

    emailInput() {
        return cy.get('#input-email');
    }

    passwordInputLabel() {
        return cy.get('label[for="input-password"]');
    }

    passwordInput() {
        return cy.get('#input-password');
    }

    rePasswordInputLabel() {
        return cy.get('label[for="input-re-password"]');
    }

    rePasswordInput() {
        return cy.get('#input-re-password');
    }

    agreeCheckbox() {
        return cy.get('[type="checkbox"]');
    }

    registerButton() {
        return cy.get('nb-register > form > button');
    }

    getGithubLink() {
        return cy.get('nb-register > section.links > div > a.github.with-icon');
    }

    getFacebookLink() {
        return cy.get('nb-register > section.links > div > a.facebook.with-icon');
    }

    getTwitterLink() {
        return cy.get('nb-register > section.links > div > a.twitter.with-icon');
    }
};