class NavigationPage {

  elements = {
    menCategory: () => cy.get('a[href*="men"]').first(),
    topsSubcategory: () => cy.get('a[href*="tops"]').first(),
    jacketsSubcategory: () => cy.get('a[href*="jackets"]').first(),
    sortDropdown: () => cy.get('.toolbar-sorter .sorter-options'),
    sizeFilter: () => cy.get('[data-value="L"]'),
    firstProduct: () => cy.get('.product-item').first(),
    addToCartButton: () => cy.get('#product-addtocart-button'),
    successMessage: () => cy.get('.message-success'),
    cartIcon: () => cy.get('.minicart-wrapper .action.showcart'),
    cartItems: () => cy.get('.minicart-items-wrapper'),
    deleteButton: () => cy.get('.action.delete'),
    confirmDeleteButton: () => cy.get('.action-primary.action-accept'),
    productName: () => cy.get('.product-item-name')
  }

  // Actions
  navigateToMenTopsJackets() {
    this.elements.menCategory().click()
    cy.wait(1000)
    this.elements.topsSubcategory().click()
    cy.wait(1000)
    this.elements.jacketsSubcategory().click()
    cy.waitForPageLoad()
    return this
  }

  sortBySize(size) {
    this.elements.sortDropdown().select('Size')
    this.elements.sizeFilter().click()
    cy.wait(2000)
    return this
  }

  selectFirstProduct() {
    this.elements.firstProduct().click()
    cy.waitForPageLoad()
    return this
  }

  addToCart() {
    this.elements.addToCartButton().click()
    cy.wait(2000)
    return this
  }

  openCart() {
    this.elements.cartIcon().click()
    return this
  }

  removeFromCart() {
    this.elements.deleteButton().first().click()
    this.elements.confirmDeleteButton().click()
    cy.wait(2000)
    return this
  }

  getFirstProductName() {
    return this.elements.productName().first().invoke('text')
  }

  // Assertions
  shouldShowSuccessMessage() {
    this.elements.successMessage().should('be.visible')
    return this
  }

  shouldContainItemInCart(itemName) {
    this.elements.cartItems().should('contain', itemName)
    return this
  }

  shouldNotContainItemInCart(itemName) {
    this.elements.cartItems().should('not.contain', itemName)
    return this
  }

  shouldBeOnProductPage() {
    cy.url().should('include', '/product/')
    return this
  }

  shouldBeOnCategoryPage() {
    cy.url().should('include', '/men/tops-men/jackets-men')
    return this
  }
}

module.exports = new NavigationPage() 