import { HomePage } from "../pageObjects/homePages";

const homePage = new HomePage();

export function sidebarMenuNavigationTo(pageName) {
    homePage.sidebarMenuNavigation().contains(pageName).click({force: true});
};

export function verifyNavigatedTo(endpoint) {
    cy.url().should("include", endpoint);
};