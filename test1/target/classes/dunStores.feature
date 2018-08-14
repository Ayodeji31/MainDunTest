Feature: Store functionality

  Scenario: As a user I want to be able to click on the list of stores
    Given am on the homepage
    And am on the store page
    And the store list has been returned
    When I select a store from the list
    Then I should be shown the store details for that store

  Scenario Outline: As a user I want to be able to search for store
    Given am on the homepage
    And am on the store page
    And I enter "<postcode>" postcode in the search field
    When I submit request
    Then list of 5 store within 60 miles is displayed

    Examples: 
      | postcode |
      | SE18 3LH |
      | BH8 8FH  |
      | LE4 5DB  |
