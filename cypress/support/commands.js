// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/customer/account/login/')
  cy.get('#email').type(email)
  cy.get('#pass').type(password)
  cy.get('#send2').click()
  cy.waitForPageLoad()
})

// Custom command to logout
Cypress.Commands.add('logout', () => {
  cy.get('.panel.header .customer-welcome .action.switch').click()
  cy.get('.panel.header .customer-menu .authorization-link').click()
  cy.waitForPageLoad()
})

// Custom command to navigate to category
Cypress.Commands.add('navigateToCategory', (category, subcategory) => {
  cy.get(`a[href*="${category.toLowerCase()}"]`).first().click()
  if (subcategory) {
    cy.get(`a[href*="${subcategory.toLowerCase()}"]`).first().click()
  }
  cy.waitForPageLoad()
})

// Custom command to add item to cart
Cypress.Commands.add('addToCart', () => {
  cy.get('.product-item').first().click()
  cy.get('#product-addtocart-button').click()
  cy.wait(2000)
  cy.get('.message-success').should('be.visible')
})

// Custom command to sort by size
Cypress.Commands.add('sortBySize', (size) => {
  cy.get('.toolbar-sorter .sorter-options').select('Size')
  cy.get(`[data-value="${size}"]`).click()
  cy.wait(2000)
})

// Custom command to verify cart item
Cypress.Commands.add('verifyCartItem', (itemName) => {
  cy.get('.minicart-wrapper .action.showcart').click()
  cy.get('.minicart-items-wrapper').should('contain', itemName)
})

// Custom command to clear cart
Cypress.Commands.add('clearCart', () => {
  cy.get('.minicart-wrapper .action.showcart').click()
  cy.get('.action.delete').first().click()
  cy.get('.action-primary.action-accept').click()
  cy.wait(2000)
}) 