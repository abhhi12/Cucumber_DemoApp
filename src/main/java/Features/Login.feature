Feature: Free CRM Login Feature
# Without Example KeyWord
#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of login page is account login
#Then user enters "abhhi2@gmail.com" and "abhinpti"
#Then user clicks on login button
#Then user is on accounts page

#Scenario: Free CRM Login Test Scenario

#Given user is already on Account login Page
#When title of login page is Account login
#Then user click on Desktopbtn
#Then user click on mac btn
#Then user is on catogery page

#With Example KeyWord

Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is account login
Then user enters "<emaiid>" and "<password>"
Then user clicks on login button
Then user is on accounts page
Then user click on Desktopbtn
Then user click on mac btn
Then user is on catogery page
Then user close the browser

Examples:

  |       emaiid      | password |
  | abhhi12@gmail.com | abhinpti |
  | abc12@yahoo.com   | abc123   |
  
  
  
  
  
  
  