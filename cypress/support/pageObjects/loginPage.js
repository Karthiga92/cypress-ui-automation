class LoginPage {

    //#region Action Methods

    navigateToUrl() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('url'), {failOnStatusCode: false})
    }

    clickAcceptCookies() {
        cy.get('div > button[aria-label="Accept"]').click()
    }


    //#endregion
}

export default LoginPage