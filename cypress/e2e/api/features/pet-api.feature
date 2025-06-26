Feature: Pet Store API CRUD Operations
  As a developer
  I want to test the Pet Store API endpoints
  So that I can ensure proper CRUD operations work correctly

  Background:
    Given I have a valid pet data

  @api @smoke @create
  Scenario: Create a new pet
    When I create a new pet with the provided data
    Then the pet should be created successfully
    And the response should contain the pet details
    And the pet should have a valid ID

  @api @smoke @read
  Scenario: Get pet by ID
    Given I have created a pet
    When I retrieve the pet by its ID
    Then the pet should be retrieved successfully
    And the response should match the created pet data

  @api @smoke @update
  Scenario: Update pet information
    Given I have created a pet
    When I update the pet with new information
    Then the pet should be updated successfully
    And the response should contain the updated pet details

  @api @smoke @delete
  Scenario: Delete pet by ID
    Given I have created a pet
    When I delete the pet by its ID
    Then the pet should be deleted successfully
    And the pet should no longer exist when retrieved

  @api @smoke @crud
  Scenario: Complete CRUD operations flow
    When I create a new pet with the provided data
    Then the pet should be created successfully
    When I retrieve the pet by its ID
    Then the pet should be retrieved successfully
    When I update the pet with new information
    Then the pet should be updated successfully
    When I delete the pet by its ID
    Then the pet should be deleted successfully
    And the pet should no longer exist when retrieved

  @api @negative
  Scenario: Get non-existent pet
    When I try to retrieve a pet with invalid ID "999999"
    Then I should receive a 404 error
    And the error message should indicate pet not found

  @api @negative
  Scenario: Delete non-existent pet
    When I try to delete a pet with invalid ID "999999"
    Then I should receive a 404 error
    And the error message should indicate pet not found 