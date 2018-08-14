Feature: Guest Reserve and collect 

Scenario: As a guest user I want to be able to reserve and order without registering my account

Given am on the homepage
When search for a product as a guest user
And I proceed to checkout to reserve the product 
Then my product is reserved



Scenario: As a registered user I want to reserve an order

Given am on the homepage
And I sign in to my account
When I search for product as a registered user
And I proceed to checkout to reserve the product 
Then my product is reserved with my details already populated in confirm details

