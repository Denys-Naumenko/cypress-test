export class SmartTablePage {
    userID() {
        return cy.get('input[placeholder="ID"]')
    }

    firstName() {
        return cy.get('input[placeholder="First Name"]')
    }

    lastName() {
        return cy.get('input[placeholder="Last Name"]')
    }

    userName() {
        return cy.get('input[placeholder="Username"]')
    }
    email() {
        return cy.get('input[placeholder="E-mail"]')
    }

    age() {
        return cy.get('input[placeholder="Age"]')
    }

    addNewUserButton() {
        return cy.get('.nb-plus')
    }

    submitButton() {
        return cy.get('.nb-checkmark')
    }

    editButton() {
        return cy.get('.nb-edit')
    }
}