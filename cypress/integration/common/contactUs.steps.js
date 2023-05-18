import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import LoginPage from '../../support/pageObjects/loginPage'
import ContactUsPage from '../../support/pageObjects/contactUsPage'

const contactUsPage = new ContactUsPage()
const loginPage = new LoginPage()

//#region Given

Given(`the user is on Founder and Lightning contact page`, () => {
    loginPage.navigateToUrl();
    loginPage.clickAcceptCookies();
})

//#endregion

//#region When

When(`the user enters the mandatory details in the contact page`, () => {
    contactUsPage.enterCustomerDetails();
})

When(`the user selects {string} from How did you hear about us drop-down`, (selectDropDown) => {
    contactUsPage.selectOptionFromDropDown(selectDropDown);
})

When(`the user clicks on send message button`, () => {
    contactUsPage.clickSendMessage();
})

//#endregion

//#region Then

Then('the message {string} should be displayed', (msg) => {
    contactUsPage.validateMessage(msg);
})

//#endregion