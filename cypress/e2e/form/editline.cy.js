/// <reference types="cypress" />


describe('Tables & Data', () => {

    it('Smart Table, add and check new line', () => {
        let newUser = ["61", "Denys", "Naumenko", "@denchik", "test@gmail.com", "26"];
        cy.visit('pages/tables/smart-table');
        cy.get('.nb-edit').eq(0).click();
        cy.get('[placeholder="ID"]').eq(1).clear().type(newUser[0]);
        cy.get('[placeholder="First Name"]').eq(1).clear().type(newUser[1]);
        cy.get('[placeholder="Last Name"]').eq(1).clear().type(newUser[2]);
        cy.get('[placeholder="Username"]').eq(1).clear().type(newUser[3]);
        cy.get('[placeholder="E-mail"]').eq(1).clear().type(newUser[4]);
        cy.get('[placeholder="Age"]').eq(1).clear().type(newUser[5]);
        cy.get('.nb-checkmark').click();
        cy.get('[ng-reflect-row-class-function]  tr:nth-child(1)').find('[ng-reflect-ng-switch]').each((text) => {
            expect(newUser).to.include(text.text());
        });
    });
});