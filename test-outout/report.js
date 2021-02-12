$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "# Without Example KeyWord"
    },
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 6,
      "value": "#When title of login page is account login"
    },
    {
      "line": 7,
      "value": "#Then user enters \"abhhi2@gmail.com\" and \"abhinpti\""
    },
    {
      "line": 8,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#Then user is on accounts page"
    },
    {
      "line": 11,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 13,
      "value": "#Given user is already on Account login Page"
    },
    {
      "line": 14,
      "value": "#When title of login page is Account login"
    },
    {
      "line": 15,
      "value": "#Then user click on Desktopbtn"
    },
    {
      "line": 16,
      "value": "#Then user click on mac btn"
    },
    {
      "line": 17,
      "value": "#Then user is on catogery page"
    },
    {
      "line": 19,
      "value": "#With Example KeyWord"
    }
  ],
  "line": 21,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of login page is account login",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cemaiid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on Desktopbtn",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user click on mac btn",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on catogery page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "emaiid",
        "password"
      ],
      "line": 35,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "abhhi12@gmail.com",
        "abhinpti"
      ],
      "line": 36,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "abc12@yahoo.com",
        "abc123"
      ],
      "line": 37,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of login page is account login",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"abhhi12@gmail.com\" and \"abhinpti\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on Desktopbtn",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user click on mac btn",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on catogery page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 9020892000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_account_login()"
});
formatter.result({
  "duration": 13766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhhi12@gmail.com",
      "offset": 13
    },
    {
      "val": "abhinpti",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_useremail_and_password(String,String)"
});
formatter.result({
  "duration": 258253800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2400624800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_accounts_page()"
});
formatter.result({
  "duration": 13042400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_Desktopbtn()"
});
formatter.result({
  "duration": 5548900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_mac_btn()"
});
formatter.result({
  "duration": 97362000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Mac (1)\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4HBPSUL\u0027, ip: \u0027172.17.240.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\abhhi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61591}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c231583241efb1b30eac6cbd98ed3b11\n*** Element info: {Using\u003dlink text, value\u003dMac (1)}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_click_on_mac_btn(LoginStepDefinition.java:76)\r\n\tat ✽.Then user click on mac btn(Login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_catogery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of login page is account login",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"abc12@yahoo.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on Desktopbtn",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user click on mac btn",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on catogery page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 9869931500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_account_login()"
});
formatter.result({
  "duration": 16477400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12@yahoo.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_useremail_and_password(String,String)"
});
formatter.result({
  "duration": 283291700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2152805300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_accounts_page()"
});
formatter.result({
  "duration": 14417800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_Desktopbtn()"
});
formatter.result({
  "duration": 329900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_mac_btn()"
});
formatter.result({
  "duration": 42658400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Mac (1)\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4HBPSUL\u0027, ip: \u0027172.17.240.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\abhhi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61612}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ff743cab3786a959892ec22d1e11dc7b\n*** Element info: {Using\u003dlink text, value\u003dMac (1)}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_click_on_mac_btn(LoginStepDefinition.java:76)\r\n\tat ✽.Then user click on mac btn(Login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_catogery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});