/// <reference types="cypress" />


describe('Modal & Overlays, Dialog', () => {
    it('Return Result From Dialog', () => {
        cy.visit('modal-overlays/dialog');
        cy.get('button:contains("Enter Name")').click();
        cy.get('ngx-dialog-name-prompt').should('be.visible');
        cy.get('ngx-dialog-name-prompt nb-card-header').should('contain.text','Enter your name').should('be.visible');
        cy.get('[placeholder="Name"]').should('be.visible');
        cy.get('button:contains("Submit")').should('be.visible');
        cy.get('button:contains("Cancel")').should('be.visible');
    })
})