import customerInfo from '../../fixtures/customerInfo.json'

class ContactUsPage {

    //#region Web-elements

    txtFirstName = 'input[name="firstname"]'
    txtLastName = 'input[name="lastname"]'
    txtEmail = 'input[name="email"]'
    txtMobileNumber = 'input[name="mobilephone"]'
    txtMessage = 'textarea[name="message"]'
    ddHowDidYouHearAboutUs = 'div > select[name="how_did_you_hear_about_us_"]'
    btnSendMessage = 'div> input[type="submit"]'
    message = '.hbspt-form > div > p'

    //#endregion

    //#region Action Methods

    /**
     * @summary : Method to enter customers details in the contact us page
     */
    enterCustomerDetails() {
        cy.get(this.txtFirstName).scrollIntoView()
        cy.get(this.txtFirstName).type(customerInfo.firstName);
        cy.get(this.txtLastName).type(customerInfo.lastName);
        cy.get(this.txtEmail).type(customerInfo.email);
        cy.get(this.txtMobileNumber).type(customerInfo.mobileNumber);
        cy.get(this.txtMessage).type(customerInfo.message);
    }

    /**
     * @summary : Method to select an option from how did you hear about us drop-down
     */
    selectOptionFromDropDown(option) {
        cy.get(this.ddHowDidYouHearAboutUs).should('be.visible');
        cy.get(this.ddHowDidYouHearAboutUs).click();
        cy.get(this.ddHowDidYouHearAboutUs).next('option').contains(option).click();
    }

    /**
     * @summary : Method to click on send message button in contact us page
     */
    clickSendMessage() {
        cy.get(this.btnSendMessage).should('be.visible');
        cy.get(this.btnSendMessage).click();
    }

    /**
     * @summary : Method to validate success message
     */
    validateMessage(msg) {
        cy.get(this.message).should('have.text', msg)
    }

    //#endregion
}

export default ContactUsPage