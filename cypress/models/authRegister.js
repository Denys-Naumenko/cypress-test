import { validUserData } from '../support/testData.js';
import { AuthRegisterPage } from '../pageObjects/authRegister.js'

const authRegisterPage = new AuthRegisterPage;

export function fillRegistrationForm() {
  authRegisterPage.nameInput().type(validUserData.fullName).should('have.value', validUserData.fullName);
  authRegisterPage.emailInput().type(validUserData.email).should('have.value', validUserData.email);
  authRegisterPage.passwordInput().type(validUserData.password).should('have.value', validUserData.password);
  authRegisterPage.rePasswordInput().type(validUserData.password).should('have.value', validUserData.password);
};

export function clickCheckbox() {
  authRegisterPage.agreeCheckbox().check({ force: true });
};

export function verifyCheckBox() {
  authRegisterPage.agreeCheckbox().should('be.checked');
};

export function clickRegisterButton() {
  authRegisterPage.registerButton().click();
};

export function checkAdditionalElements() {
  authRegisterPage.getGithubLink().should('be.visible');
  authRegisterPage.getFacebookLink().should('be.visible');
  authRegisterPage.getTwitterLink().should('be.visible');
};

export function verifyHeaders() {
  authRegisterPage.title().should('contain.text', 'Register');
  authRegisterPage.nameInputLabel().should('contain.text', 'Full name');
  authRegisterPage.emailInputLabel().should('contain.text', 'Email address');
  authRegisterPage.passwordInputLabel().should('contain.text', 'Password');
  authRegisterPage.rePasswordInputLabel().should('contain.text', 'Repeat password');
};

export function verifyFormErrorMessage(selector, errorMessage) {
  selector.as('selector').click();
  cy.get('#title').click();
  cy.get('@selector').next().should('contain.text', errorMessage);
};

export function validationEmailErrorMessage() {
  verifyFormErrorMessage(authRegisterPage.emailInput(), 'Email is required');
};

export function validationPasswordErrorMessage() {
  verifyFormErrorMessage(authRegisterPage.passwordInput(), 'Password is required');
};

export function validationRepasswordErrorMessage() {
  verifyFormErrorMessage(authRegisterPage.rePasswordInput(), 'Password confirmation is required!');
};