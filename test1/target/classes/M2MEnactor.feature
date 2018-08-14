Feature: Enactor Journey

  Scenario: As a user I want to be able to configure a product and add to basket
    Given am on the homepage
    And I navigate to enactor
    When I configure a product and I add to basket
    Then I can see product displayed in my basket
    And I continue to checkout
    And My order is placed
