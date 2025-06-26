const LoginPage = require('../page-objects/LoginPage.js')

Given('I am on the login page', () => {
  LoginPage.visit()
})

Given('I am logged in with valid credentials', () => {
  LoginPage.visit()
  LoginPage.login('roni_cost@example.com', 'roni_cost3@example.com')
  LoginPage.shouldBeLoggedIn()
})

When('I enter valid email {string}', (email) => {
  LoginPage.enterEmail(email)
})

When('I enter invalid email {string}', (email) => {
  LoginPage.enterEmail(email)
})

When('I enter valid password {string}', (password) => {
  LoginPage.enterPassword(password)
})

When('I enter invalid password {string}', (password) => {
  LoginPage.enterPassword(password)
})

When('I click the login button', () => {
  LoginPage.clickLogin()
})

When('I click on the logout link', () => {
  LoginPage.logout()
})

Then('I should be successfully logged in', () => {
  LoginPage.shouldBeLoggedIn()
})

Then('I should see a welcome message', () => {
  LoginPage.shouldBeLoggedIn()
})

Then('I should see an error message', () => {
  LoginPage.shouldShowErrorMessage()
})

Then('I should not be logged in', () => {
  LoginPage.shouldBeLoggedOut()
})

Then('I should be successfully logged out', () => {
  LoginPage.shouldBeLoggedOut()
})

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/customer/account/login')
}) 