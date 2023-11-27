import { validUserData } from '../support/testData.js';
import { SmartTablePage } from '../pageObjects/smartTable.js'

const smartTablePage = new SmartTablePage;

let userData = [validUserData.id, validUserData.name, validUserData.lastName, validUserData.userName, validUserData.email, validUserData.age];

export function clickAddNewUserButton() {
    smartTablePage.addNewUserButton().click();
};

export function fillUserForm() {
    smartTablePage.userID().eq(1).type(validUserData.id);
    smartTablePage.firstName().eq(1).type(validUserData.name);
    smartTablePage.lastName().eq(1).type(validUserData.lastName);
    smartTablePage.userName().eq(1).type(validUserData.userName);
    smartTablePage.email().eq(1).type(validUserData.email);
    smartTablePage.age().eq(1).type(validUserData.age);
};

export function submitButton() {
    smartTablePage.submitButton().click();
};

export function lastAddedUser() {
    smartTablePage.userID().eq(0).type(validUserData.id);
}

export function verifyUser() {
    cy.get('[ng-reflect-row-class-function]  tr:nth-child(1)').find('[ng-reflect-ng-switch]').each((text, index) => {
        expect(text.text()).to.equal(userData[index].toString());
    });
};

export function editfirstUser() {
    smartTablePage.editButton().eq(0).click();
    smartTablePage.userID().eq(1).clear().type(validUserData.id);
    smartTablePage.firstName().eq(1).clear().type(validUserData.name);
    smartTablePage.lastName().eq(1).clear().type(validUserData.lastName);
    smartTablePage.userName().eq(1).clear().type(validUserData.userName);
    smartTablePage.email().eq(1).clear().type(validUserData.email);
    smartTablePage.age().eq(1).clear().type(validUserData.age);
};