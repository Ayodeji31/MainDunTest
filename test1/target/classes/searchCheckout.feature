Feature: Search to checkout 

Scenario: Search for product proceed to checkout
Given am on the homepage
When I search for product
And I proceed to checkout
And I reserve to collect and pay in store 
When I choose store
And I confirm my details
Then My reservation should be made 
  