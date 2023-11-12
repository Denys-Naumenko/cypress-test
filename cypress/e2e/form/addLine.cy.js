/// <reference types="cypress" />


describe('Tables & Data', () => {

    it('Smart Table, add and check new line', () => {
        let newUser = ["61", "Denys", "Naumenko", "@denchik", "test@gmail.com", "26"];
        cy.visit('pages/tables/smart-table');
        cy.get('.nb-plus').click();
        cy.get('input[placeholder="ID"]').eq(1).type(newUser[0]);
        cy.get('input[placeholder="First Name"]').eq(1).type(newUser[1]);
        cy.get('input[placeholder="Last Name"]').eq(1).type(newUser[2]);
        cy.get('input[placeholder="Username"]').eq(1).type(newUser[3]);
        cy.get('input[placeholder="E-mail"]').eq(1).type(newUser[4]);
        cy.get('input[placeholder="Age"]').eq(1).type(newUser[5]);
        cy.get('.nb-checkmark').click();
        cy.get('input[placeholder="ID"]').eq(0).type(newUser[0]);
        cy.wait(1000);
        cy.get('[ng-reflect-row-class-function]  tr:nth-child(1)').find('[ng-reflect-ng-switch]').each((text) => {
            expect(newUser).to.include(text.text());
        });
    });
});