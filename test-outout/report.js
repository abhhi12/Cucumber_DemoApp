$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is account login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters useremail and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on accounts page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7540863200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_account_login()"
});
formatter.result({
  "duration": 12367200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_useremail_and_password()"
});
formatter.result({
  "duration": 252886400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 14248657400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_accounts_page()"
});
formatter.result({
  "duration": 769660900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is already on Account login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is Account login",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on Desktopbtn",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on mac btn",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on catogery page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Account_login_Page()"
});
formatter.result({
  "duration": 7774946300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Account_login()"
});
formatter.result({
  "duration": 9671600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_Desktopbtn()"
});
formatter.result({
  "duration": 95522600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_mac_btn()"
});
formatter.result({
  "duration": 2961141500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_catogery_page()"
});
formatter.result({
  "duration": 797855300,
  "status": "passed"
});
});