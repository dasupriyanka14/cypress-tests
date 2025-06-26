const NavigationPage = require('../page-objects/NavigationPage.js')


Given('I am on the homepage', () => {
  cy.visit('/')
  cy.waitForPageLoad()
})

Given('I am on the Jackets category page', () => {
  NavigationPage.navigateToMenTopsJackets()
  NavigationPage.shouldBeOnCategoryPage()
})

Given('I have an item in my cart', () => {
  NavigationPage.navigateToMenTopsJackets()
  NavigationPage.sortBySize('L')
  NavigationPage.selectFirstProduct()
  NavigationPage.addToCart()
  NavigationPage.shouldShowSuccessMessage()
})

When('I navigate to Men category', () => {
  NavigationPage.elements.menCategory().click()
  cy.wait(1000)
})

When('I navigate to Tops subcategory', () => {
  NavigationPage.elements.topsSubcategory().click()
  cy.wait(1000)
})

When('I navigate to Jackets subcategory', () => {
  NavigationPage.elements.jacketsSubcategory().click()
  cy.waitForPageLoad()
})

When('I sort products by size {string}', (size) => {
  NavigationPage.sortBySize(size)
})

When('I select the first product', () => {
  NavigationPage.selectFirstProduct()
})

When('I add the product to cart', () => {
  NavigationPage.addToCart()
})

When('I open the shopping cart', () => {
  NavigationPage.openCart()
})

When('I remove the item from cart', () => {
  NavigationPage.removeFromCart()
})

When('I verify the item is in the cart', () => {
  NavigationPage.openCart()
  NavigationPage.getFirstProductName().then((productName) => {
    NavigationPage.shouldContainItemInCart(productName.trim())
  })
})

Then('I should be on the Jackets category page', () => {
  NavigationPage.shouldBeOnCategoryPage()
})

Then('I should see product listings', () => {
  cy.get('.product-item').should('have.length.greaterThan', 0)
})

Then('I should see a success message', () => {
  NavigationPage.shouldShowSuccessMessage()
})

Then('the item should be added to the cart', () => {
  NavigationPage.getFirstProductName().then((productName) => {
    NavigationPage.openCart()
    NavigationPage.shouldContainItemInCart(productName.trim())
  })
})

Then('the item should be removed from the cart', () => {
  NavigationPage.getFirstProductName().then((productName) => {
    NavigationPage.shouldNotContainItemInCart(productName.trim())
  })
})

Then('I should see an empty cart message', () => {
  cy.get('.minicart-items-wrapper').should('contain', 'You have no items in your shopping cart')
})

Then('the cart should be empty', () => {
  cy.get('.minicart-items-wrapper').should('contain', 'You have no items in your shopping cart')
})

Then('I should be able to continue shopping', () => {
  cy.get('.product-item').should('have.length.greaterThan', 0)
}) 