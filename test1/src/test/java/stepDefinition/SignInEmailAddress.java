package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.HomeDeliveryDetailsPage;
import pageObject.HomePage;
import pageObject.LandingPage;
import pageObject.ProductPage;
import pageObject.RegistrationLogonPage;

public class SignInEmailAddress extends TestBase{
	
	
	

@When("^I fill in valid \"([^\"]*)\" email details\"([^\"]*)\"$")
public void i_fill_in_valid_email_details(String Email, String Password) throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class); 
	landingpage.click_signIn();
	Thread.sleep(1000);
	RegistrationLogonPage registrationlogonpage = PageFactory.initElements(driver, RegistrationLogonPage.class); 
	registrationlogonpage.typeSignInEmailAddressTest(Email);
	registrationlogonpage.type_passwordTest(Password);
	registrationlogonpage.clickSignInButton();
	Thread.sleep(1000);
   
}

@Then("^am logged in$")
public void am_logged_in() throws Throwable {
	HomePage homepage = PageFactory.initElements(driver, HomePage.class);
	WebElement acctsignot = driver.findElement(By.cssSelector("#headerMyAccount > svg > use"));
	Actions action = new Actions(driver);
	action.moveToElement(acctsignot).build().perform();
//	homepage.HoverOnMyAccount();
	homepage.click_signout();  
	Thread.sleep(1000);  
}

@When("^I sign In with invalid \"([^\"]*)\" email and correct\"([^\"]*)\"$")
public void i_sign_In_with_invalid_email_and_correct(String Email, String Password) throws Throwable {
	RegistrationLogonPage registrationlogonpage = PageFactory.initElements(driver, RegistrationLogonPage.class); 
	registrationlogonpage.typeSignInEmailAddressTest(Email);
//	registrationlogonpage.checkEmailErrorMessageIsDisplayed();
	registrationlogonpage.type_passwordTest(Password);
   
}

@Then("^an error message is displayed to the user$")
public void an_error_message_is_displayed_to_the_user() throws Throwable {
	RegistrationLogonPage registrationlogonpage = PageFactory.initElements(driver, RegistrationLogonPage.class); 
	registrationlogonpage.checkEmailErrorMessageIsDisplayed();
//	driver.close();
}

@When("^I add a product to basket and proceed to HD$")
public void i_add_a_product_to_basket_and_proceed_to_HD() throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
	landingpage.type_search("30026345 ");
	landingpage.click_searchBtn();
	ProductPage products = PageFactory.initElements(driver, ProductPage.class);
	products.clickAddToBasket();
	products.clickCheckoutMode();
	BasketPage basketpage =PageFactory.initElements(driver, BasketPage.class);
	Thread.sleep(1000);
	basketpage.click_HomeDeliveryBotton();
	
    
}

@When("^I sign in with my existing \"([^\"]*)\" and \"([^\"]*)\"credentials$")
public void i_sign_in_with_my_existing_and_credentials(String Email, String Password) throws Throwable {
	HomeDeliveryDetailsPage homedeliverydetailspage = PageFactory.initElements(driver, HomeDeliveryDetailsPage.class);
	homedeliverydetailspage.clickHomeDelivSignIn();
	Thread.sleep(500);
	homedeliverydetailspage.typeHomeEmailAddres(Email);
	homedeliverydetailspage.typeHomePassword(Password);
	homedeliverydetailspage.clickHomeSignInYourAccount();
	homedeliverydetailspage.clickHomeBack_To_BasketLink();
   
}


}



