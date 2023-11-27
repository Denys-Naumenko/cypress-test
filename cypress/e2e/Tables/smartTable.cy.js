/// <reference types="cypress" />

import { sidebarMenuNavigationTo, verifyNavigatedTo } from "../../models/sidebarNavigation";
import { url } from '../../support/testData';
import { clickAddNewUserButton, fillUserForm, submitButton, verifyUser, lastAddedUser, editfirstUser } from '../../models/smartTable.js';



describe('Add and edit new user in Smart Table', () => {

    beforeEach(() => {
        cy.visit('/');
        sidebarMenuNavigationTo('Smart Table');
        verifyNavigatedTo(url.smartTable);
    })

    it("Add new user to the table", () => {
        clickAddNewUserButton();
        fillUserForm();
        submitButton();
        lastAddedUser();
        verifyUser();
    });

    it("Edit user", () => {
        editfirstUser();
        submitButton();
        verifyUser();
    });

});