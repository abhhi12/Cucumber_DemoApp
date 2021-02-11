package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
		
			 WebDriver driver;
		
			
			 @Given("^user is already on Login Page$")
			 public void user_already_on_login_page(){
			 System.setProperty("webdriver.chrome.driver","D:\\Chrome Driver 88\\chromedriver.exe");
			 driver = new ChromeDriver();
			 driver.get("https://demo.opencart.com/index.php?route=account/login");
			 }
			
			
			 @When("^title of login page is account login$")
			 public void title_of_login_page_is_account_login(){
			 String title = driver.getTitle();
			 System.out.println(title);
			 //Assert.assertEquals("https://demo.opencart.com/index.php?route=account/login", title);
			 }
			
			 //Reg Exp:
			 //1. \"([^\"]*)\"
			 //2. \"(.*)\"
			
			 @Then("^user enters useremail and password$")
			 public void user_enters_useremail_and_password(){
			 driver.findElement(By.id("input-email")).sendKeys("abhhi12@gmail.com");
			 driver.findElement(By.id("input-password")).sendKeys("abhinpti");
			 }
			
			 @Then("^user clicks on login button$")
			 public void user_clicks_on_login_button() {
			 WebElement loginBtn =
			 driver.findElement(By.xpath("//input[@type='submit']"));
			 JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();", loginBtn);
			 }
			
			
			 @Then("^user is on accounts page$")
			 public void user_is_on_accounts_page(){
			 String title = driver.getTitle();
			 System.out.println("Home Page title ::"+ title);
			 //Assert.assertEquals("https://demo.opencart.com/index.php?route=account/account", title);
			
			 driver.quit();
			 
			 }
			 
			 @Given("^user is already on Account login Page$")
			 public void user_is_already_on_Account_login_Page() {
				 System.setProperty("webdriver.chrome.driver","D:\\Chrome Driver 88\\chromedriver.exe");
				 driver = new ChromeDriver();
				 driver.get("https://demo.opencart.com/index.php?route=account/account");
				 
			 }
			 
			 @When("^title of login page is Account login$")
			 public void title_of_login_page_is_Account_login() {
				 String title = driver.getTitle();
				 System.out.println(title);
			 }
			 
			 @Then("^user click on Desktopbtn$")
			 public void user_click_on_Desktopbtn() {
				 driver.findElement(By.linkText("Desktops")).click();
			 }
			 
			 @Then("^user click on mac btn$")
			 public void user_click_on_mac_btn() {
				 driver.findElement(By.linkText("Mac (1)")).click();
			 }
			 
			 @Then("^user is on catogery page$")
			 public void user_is_on_catogery_page() {
				 String title=driver.getTitle();
				 System.out.println("Home Page title ::"+ title);
				// Assert.assertEquals("https://demo.opencart.com/index.php?route=product/category&path=20_27", title);
				 driver.quit();
			 }
			 
	

}
