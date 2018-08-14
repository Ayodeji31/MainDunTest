Feature: Mix Basket search functionality

  Scenario: Mixed basket search
    Given am on the homepage
    When I search for products and I add to basket
      | 30005438 |
      | 30008773 |
      | 30008765 |
      | 30019604 |
      | 30117481 |
      | 30019557 |
      | 30025624 |
      | 30244202 |
      | 30304645 |
    Then I proceed to checkout dunelm
