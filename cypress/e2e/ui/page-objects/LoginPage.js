class LoginPage {
  
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#pass'),
    loginButton: () => cy.get('#send2'),
    errorMessage: () => cy.get('.message-error'),
    successMessage: () => cy.get('.message-success'),
    welcomeMessage: () => cy.get('.panel.header .customer-welcome'),
    logoutLink: () => cy.get('.panel.header .customer-menu .authorization-link')
  }


  visit() {
    cy.visit('/customer/account/login/')
    return this
  }

  enterEmail(email) {
    this.elements.emailInput().type(email)
    return this
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password)
    return this
  }

  clickLogin() {
    this.elements.loginButton().click()
    return this
  }

  login(email, password) {
    this.enterEmail(email)
    this.enterPassword(password)
    this.clickLogin()
    cy.waitForPageLoad()
    return this
  }

  logout() {
    this.elements.welcomeMessage().click()
    this.elements.logoutLink().click()
    cy.waitForPageLoad()
    return this
  }

  // Assertions
  shouldShowErrorMessage() {
    this.elements.errorMessage().should('be.visible')
    return this
  }

  shouldShowSuccessMessage() {
    this.elements.successMessage().should('be.visible')
    return this
  }

  shouldBeLoggedIn() {
    this.elements.welcomeMessage().should('be.visible')
    return this
  }

  shouldBeLoggedOut() {
    this.elements.welcomeMessage().should('not.exist')
    return this
  }
}

module.exports = new LoginPage() 