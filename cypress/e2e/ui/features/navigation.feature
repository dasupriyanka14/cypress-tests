Feature: Navigation and Shopping Cart
  As a user
  I want to navigate through categories and manage my shopping cart
  So that I can find and purchase products

  Background:
    Given I am on the homepage

  @smoke @navigation
  Scenario: Navigate to Men Tops Jackets category
    When I navigate to Men category
    And I navigate to Tops subcategory
    And I navigate to Jackets subcategory
    Then I should be on the Jackets category page
    And I should see product listings

  @smoke @navigation @cart
  Scenario: Add item to cart and verify
    Given I am on the Jackets category page
    When I sort products by size "L"
    And I select the first product
    And I add the product to cart
    Then I should see a success message
    And the item should be added to the cart

  @smoke @navigation @cart
  Scenario: Remove item from cart
    Given I have an item in my cart
    When I open the shopping cart
    And I remove the item from cart
    Then the item should be removed from the cart
    And I should see an empty cart message

  @smoke @navigation @cart
  Scenario: Complete shopping flow
    Given I am on the Jackets category page
    When I sort products by size "L"
    And I select the first product
    And I add the product to cart
    And I verify the item is in the cart
    And I remove the item from cart
    Then the cart should be empty
    And I should be able to continue shopping 