package stepDefinition;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.BillingConfirmationPage;
import pageObject.LandingPage;
import pageObject.ProductPage;
import pageObject.ROCSStoreSelectionPage;
import pageObject.RocsDetailViewPage;
import pageObject.SearchPage;

public class Search_Checkout extends TestBase{
	
//	public WebDriver driver = getDriver();
	
	@When("^I search for product$")
	public void i_search_for_product() throws Throwable {
	LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);  
	landinpage.type_search("30019557");
	landinpage.click_searchBtn();
	
//	SearchPage searchpage = PageFactory.initElements(driver, SearchPage.class);
//	searchpage.click_RollerBlind();
//	
	ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
//	productpage.click_RollBlindColour();
//	productpage.clickLinenRollerBlind_SIze();
	productpage.clickRoller_quantity();
	productpage.clickAddToBasket();
	Thread.sleep(500);
	
	

	}

	@When("^I proceed to checkout$")
	public void i_proceed_to_checkout() throws Throwable {
	ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
	productpage.clickCheckoutMode(); 
	Thread.sleep(1000);
	}

	@When("^I reserve to collect and pay in store$")
	public void i_reserve_to_collect_and_pay_in_store() throws Throwable {
	BasketPage basketpage = PageFactory.initElements(driver, BasketPage.class); 
	basketpage.click_basketQuantity();
	basketpage.click_ReserveOnline();
	Thread.sleep(1000);
	}

	@When("^I choose store$")
	public void i_choose_store() throws Throwable {
	ROCSStoreSelectionPage reserveonline = PageFactory.initElements(driver, ROCSStoreSelectionPage.class);
	reserveonline.typeTo_checkStock();
	reserveonline.click_checkStockBtn();
	reserveonline.click_CollectInNottinham();
	}

	@When("^I confirm my details$")
	public void i_confirm_my_details() throws Throwable {
	RocsDetailViewPage rocsdetailview = PageFactory.initElements(driver, RocsDetailViewPage.class);
	rocsdetailview.select_title();
	rocsdetailview.type_firstname();
	rocsdetailview.type_lastname();
	rocsdetailview.type_emailAddress();
	rocsdetailview.type_phoneNumber();
	rocsdetailview.click_reserveAtConventryBtn();
	  
	}

	@Then("^My reservation should be made$")
	public void my_reservation_should_be_made() throws Throwable {
	BillingConfirmationPage billingconfirmation = PageFactory.initElements(driver, BillingConfirmationPage.class);
	billingconfirmation.check_reservationIsDisplayed();
	
	File scrFile1 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(scrFile1, new File ("C:\\Screenshots\\Billing Confirmation.jpg")); 
    System.out.println("Billing confirmation Saved in C Drive");
	}



}
