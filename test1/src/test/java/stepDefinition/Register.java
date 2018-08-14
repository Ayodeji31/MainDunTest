package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.HomePage;
import pageObject.LandingPage;
import pageObject.RegistrationLogonPage;

public class Register extends TestBase{
	
//	public WebDriver driver = getDriver();
	
	
	@When("^I click sign in link$")
	public void i_click_sign_in_link() throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class); 
	landingpage.click_signIn();
	Thread.sleep(1000);
	}

	@When("^I fill in details under Create an account$")
	public void i_fill_in_details_under_Create_an_account() throws Throwable {
	RegistrationLogonPage registrationlogonpage = PageFactory.initElements(driver, RegistrationLogonPage.class); 
	registrationlogonpage.type_emailaddre();
	registrationlogonpage.type_password();
	registrationlogonpage.click_show_passwordTB();
	}

	@When("^Click Create a dunelm account button$")
	public void click_Create_a_dunelm_account_button() throws Throwable {
	RegistrationLogonPage registrationlogonpage = PageFactory.initElements(driver, RegistrationLogonPage.class); 
	registrationlogonpage.click_create_account_btn();  
	}

	@Then("^I should be log in$")
	public void i_should_be_log_in() throws Throwable {
	HomePage homepage = PageFactory.initElements(driver, HomePage.class);
	homepage.welcome_message_display();
	}

	@Then("^I click log out$")
	public void i_click_log_out() throws Throwable {
	HomePage homepage = PageFactory.initElements(driver, HomePage.class);
	WebElement acctsignot = driver.findElement(By.cssSelector("#headerMyAccount > svg > use"));
	Actions action = new Actions(driver);
	action.moveToElement(acctsignot).build().perform();
//	homepage.HoverOnMyAccount();
	homepage.click_signout();  
	Thread.sleep(1000);
	}

}
