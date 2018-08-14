Feature: Register functionality

  Scenario: As a user I want to be able to register
    Given am on the homepage
    When I click sign in link
    And I fill in details under Create an account
    And Click Create a dunelm account button
    Then I should be log in
    And I click log out
