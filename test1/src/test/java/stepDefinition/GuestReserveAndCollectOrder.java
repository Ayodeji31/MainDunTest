package stepDefinition;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.HomePage;
import pageObject.LandingPage;
import pageObject.OrderConfirmationPage;
import pageObject.OrderHistoryPage;
import pageObject.ProductPage;
import pageObject.ROCSStoreSelectionPage;
import pageObject.RegistrationLogonPage;
import pageObject.RocsDetailViewPage;

public class GuestReserveAndCollectOrder extends TestBase{
	
	
	@When("^search for a product as a guest user$")
	public void search_for_a_product_as_a_guest_user() throws Throwable {
	LandingPage landing = PageFactory.initElements(driver, LandingPage.class); 
	landing.type_search("1000038272");
	landing.click_searchBtn();
	}

	@When("^I proceed to checkout to reserve the product$")
	public void i_proceed_to_checkout_to_reserve_the_product() throws Throwable {
	ProductPage products = PageFactory.initElements(driver, ProductPage.class);
//	products.click_quantity();
	products.clickAddToBasket();
	Thread.sleep(500);
	products.clickCheckoutMode();
	Thread.sleep(1000);
	 
	BasketPage baskets = PageFactory.initElements(driver, BasketPage.class);
	baskets.click_ReserveOnline();
	 
	ROCSStoreSelectionPage reserveandcollect = PageFactory.initElements(driver, ROCSStoreSelectionPage.class);
	reserveandcollect.typeTo_checkStock();
	reserveandcollect.click_checkStockBtn();
	reserveandcollect.click_CollectInNottinham();
	Thread.sleep(1000);
	}

	@Then("^my product is reserved$")
	public void my_product_is_reserved() throws Throwable {
	RocsDetailViewPage detailsview = PageFactory.initElements(driver, RocsDetailViewPage.class);
	detailsview.select_title();
	detailsview.type_firstname();
	detailsview.type_lastname();
	detailsview.type_emailAddress();
	detailsview.type_phoneNumber();
	detailsview.click_reserveAtConventryBtn();
	
	OrderConfirmationPage confirmation = PageFactory.initElements(driver, OrderConfirmationPage.class);
	confirmation.checkReservatnNumber();
	  
	}
	
	@Given("^I sign in to my account$")
	public void i_sign_in_to_my_account() throws Throwable {
	LandingPage landing = PageFactory.initElements(driver, LandingPage.class); 
	landing.click_signIn();	
	Thread.sleep(1000);	
	RegistrationLogonPage loginpage = PageFactory.initElements(driver, RegistrationLogonPage.class);
	loginpage.typeSignInEmailAddress("ayodeji201@gmail.com");
	loginpage.typeSignPassword("Trustee#01");
	loginpage.clickSignInButton();
	    
	}

	@When("^I search for product as a registered user$")
	public void i_search_for_product_as_a_registered_user() throws Throwable {
	LandingPage landing = PageFactory.initElements(driver, LandingPage.class); 
	landing.type_search("30008765");
	landing.click_searchBtn();
	   
	}
	
	@Then("^my product is reserved with my details already populated in confirm details$")
	public void my_product_is_reserved_with_my_details_already_populated_in_confirm_details() throws Throwable {
	RocsDetailViewPage detailsview = PageFactory.initElements(driver, RocsDetailViewPage.class);
	detailsview.click_reserveAtConventryBtn(); 
	detailsview.select_title();
	detailsview.type_firstname();
	detailsview.type_lastname();
	detailsview.type_phoneNumber();
	detailsview.click_reserveAtConventryBtn();
	Thread.sleep(1000);
	
	OrderConfirmationPage confirmation = PageFactory.initElements(driver, OrderConfirmationPage.class);
	confirmation.checkReservatnNumber();
	
	RegistrationLogonPage registrationpage = PageFactory.initElements(driver, RegistrationLogonPage.class);
	registrationpage.HoverOrderHistory();
	registrationpage.clickOrderHistory();
	
	OrderHistoryPage orderhist = PageFactory.initElements(driver, OrderHistoryPage.class);
	orderhist.clickOrderDetails();
	
	HomePage home = PageFactory.initElements(driver, HomePage.class);
	registrationpage.HoverOrderHistory();
	home.click_signout();
	
	
	
		
	}




}
