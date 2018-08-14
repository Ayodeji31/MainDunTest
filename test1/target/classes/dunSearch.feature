Feature: Search functionality

  Scenario Outline: As a user I want to be able to create a search for a product
    Given am on the homepage
    When I enter "<product>" to be searched
    And I click search button
    Then product should display

    Examples: 
      | product                        |
      | Rubber duck                    |
      | Thermosoft cream plain blanket |
      | Slip photo frame               |
