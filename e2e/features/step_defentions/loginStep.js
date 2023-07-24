/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
const {Given, When} = require('cucumber');
import {
  checkElementExist,
  clickElementTwice,
  clickElementOnce,
  enterText,
} from '../commonHelpers';
const testid = require('../support/testid');

Given('I should have welcome screen', async () => {
  await checkElementExist(testid.SIGN_IN_BUTTON);
  await clickElementOnce(testid.SIGN_IN_BUTTON);
});
Given(
  'User has navigated to Login page and username and password texts are visible and data is entered in both fields',
  async () => {
    //usernamebox
    await checkElementExist(testid.USERNAME_BEFORE);
    await clickElementTwice(testid.USERNAME_BEFORE);
    await checkElementExist(testid.USERNAME_FIELD);
    await enterText(testid.USERNAME_FIELD, 'Testprod165@mailinator.com');

    // await clickElementOnce(testid.USERNAME_FIELD);

    await checkElementExist(testid.PASSWORD_BEFORE);
    await clickElementTwice(testid.PASSWORD_BEFORE);
    await checkElementExist(testid.PASSWORD_FIELD);
    await enterText(testid.PASSWORD_FIELD, 'Test@123');
    await clickElementOnce(testid.SIGN_IN_BUTTON);
  },
);
