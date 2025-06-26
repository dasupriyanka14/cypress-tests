Feature: Login Functionality
  As a user
  I want to be able to login to the website
  So that I can access my account and make purchases

  Background:
    Given I am on the login page

  @smoke @login
  Scenario: Successful login with valid credentials
    When I enter valid email "roni_cost@example.com"
    And I enter valid password "roni_cost3@example.com"
    And I click the login button
    Then I should be successfully logged in
    And I should see a welcome message

  @smoke @login @negative
  Scenario: Failed login with invalid credentials
    When I enter invalid email "invalid@example.com"
    And I enter invalid password "wrongpassword"
    And I click the login button
    Then I should see an error message
    And I should not be logged in

  @smoke @login @negative
  Scenario: Failed login with empty credentials
    When I click the login button
    Then I should see an error message
    And I should not be logged in

  @smoke @login
  Scenario: Logout functionality
    Given I am logged in with valid credentials
    When I click on the logout link
    Then I should be successfully logged out
    And I should be redirected to the login page 