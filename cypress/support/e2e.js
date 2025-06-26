import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.wait(1000) 
})

Cypress.Commands.add('clearCart', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.action.delete').length > 0) {
      cy.get('.action.delete').first().click()
      cy.get('.action-primary.action-accept').click()
      cy.wait(2000)
    }
  })
}) 