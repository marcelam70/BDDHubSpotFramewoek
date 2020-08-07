$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePageHS.feature");
formatter.feature({
  "line": 1,
  "name": "HubSpot Home Page Feature",
  "description": "",
  "id": "hubspot-home-page-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2260900937,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on hubspot home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSD.verifyHomePageTitle()"
});
formatter.result({
  "duration": 4872178517,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify account name",
  "description": "",
  "id": "hubspot-home-page-feature;verify-account-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@homePage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I get home page header",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get logged in user account name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on contacts button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSD.verifyHomePageHeader()"
});
formatter.result({
  "duration": 1649752915,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.verifyAccountName()"
});
formatter.result({
  "duration": 108458339,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard Library]\u003e but was:\u003c[Silicone Labs ]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepdefinition.HomePageSD.verifyAccountName(HomePageSD.java:25)\n\tat ✽.And I get logged in user account name(HomePageHS.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSD.verifyContacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1094465148,
  "status": "passed"
});
formatter.uri("LoginHS.feature");
formatter.feature({
  "line": 3,
  "name": "HubSpot Login page feature",
  "description": "",
  "id": "hubspot-login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 1302760252,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on hubspot login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 6326482,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify invalid login from HubSpot page",
  "description": "",
  "id": "hubspot-login-page-feature;verify-invalid-login-from-hubspot-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter jake@gmail.com into username field on the hubspot login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter quito123 into password field on the hubspot login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on hubspot login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify invalid login hubspot login on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jake@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 4412559942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quito123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 124399627,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyLogin()"
});
formatter.result({
  "duration": 119985035,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyErrorMessage()"
});
formatter.result({
  "duration": 1086203665,
  "status": "passed"
});
formatter.after({
  "duration": 102244770,
  "status": "passed"
});
});