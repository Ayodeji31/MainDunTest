Feature: SignIn Email Validation

  Scenario Outline: As a user I want to be able to signIn with correct email address
    Given am on the homepage
    When I click sign in link
    And I fill in valid "<Email>" email details"<Password>"
    Then am logged in

    Examples: 
      | Email                | Password   |
      | ayodeji516@gmail.com | Trustee#01 |
      | ayodeji512@gmail.com | Trustee#01 |

  Scenario Outline: As a user when I sign in with incorrect email address I should not be logged in
    Given am on the homepage
    When I click sign in link
    And I sign In with invalid "<Email>" email and correct"<Password>"
    Then an error message is displayed to the user

    Examples: 
      | Email                          | Password  |
      | yvonnehendry788@yahoo.co..uk   | Testing12 |
      | paul.michael@blueyonder.co..uk | Testing12 |

  Scenario Outline: As a user I want to be able to signIn with correct email address from home delivery details page
    Given am on the homepage
    When I add a product to basket and proceed to HD
    And I sign in with my existing "<Email>" and "<Password>"credentials
    Then am logged in

    Examples: 
      | Email                 | Password   |
      | ayodeji1037@gmail.com | Trustee#01 |
      | ayodeji415@gmail.com  | Trustee#01 |
