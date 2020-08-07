@web

Feature: HubSpot Login page feature

  Background:
    Given I am on hubspot login page

  @login
  Scenario: Verify invalid login from HubSpot page
    When I enter jake@gmail.com into username field on the hubspot login page
    And I enter quito123 into password field on the hubspot login page
    And I click on login button on hubspot login page
    Then I verify invalid login hubspot login on sign in page