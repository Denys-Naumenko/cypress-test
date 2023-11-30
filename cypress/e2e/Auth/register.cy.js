/// <reference types="cypress" />

import { sidebarMenuNavigationTo, verifyNavigatedTo } from "../../models/sidebarNavigation";
import { url } from '../../support/testData'
import { fillRegistrationForm, clickCheckbox, verifyCheckBox, checkAdditionalElements, clickRegisterButton, verifyHeaders, validationEmailErrorMessage, validationPasswordErrorMessage, validationRepasswordErrorMessage } from "../../models/authRegister";


describe('Register new user on the Register page', () => {

  beforeEach(() => {
    cy.visit('/');
    sidebarMenuNavigationTo('Register');
    verifyNavigatedTo(url.register);
  })

  it("Header validation", () => {
    verifyHeaders();
  });

  it("Form validation", () => {
    validationPasswordErrorMessage();
    validationEmailErrorMessage();
    validationRepasswordErrorMessage();
  });

  it('Register new user', () => {
    fillRegistrationForm();
    clickCheckbox();
    verifyCheckBox();
    checkAdditionalElements();
    clickRegisterButton();
  });

});