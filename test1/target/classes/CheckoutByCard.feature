Feature: Checkout and pay by card

Scenario: Search for product proceed to checkout and pay by card
Given am on the homepage
When I search for items to add to basket
And I proceed to checkout
And I choose home delivery
And I proceed with my delivery details and card details
Then my order should be confirmed
 
