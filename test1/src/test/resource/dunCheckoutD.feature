Feature: Checkout functionality

Scenario: As a user I want to select different item in my basket and still be able to checkout
Given am on the homepage
When I selected items in my basket
And proceed to checkout
Then I should be able to see list of delivery options
