package stepDefinition;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.HomeDeliveryDetailsPage;
import pageObject.LandingPage;
import pageObject.MadeToMeasurePage;
import pageObject.PaymentDetailsViewPage;

public class M2Menactor extends TestBase{
	
	@Given("^I navigate to enactor$")
	public void i_navigate_to_enactor() throws Throwable {
		LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
		landingpage.HoverOverCurtainsAndBlind();
		landingpage.clickMadeToMeasureCurt();
		landingpage.clickMetalVenitianBlind();
	}

	@When("^I configure a product and I add to basket$")
	public void i_configure_a_product_and_I_add_to_basket() throws Throwable {
		MadeToMeasurePage M2M = PageFactory.initElements(driver, MadeToMeasurePage.class);
		M2M.clickEssentialAladinsBlind();
		M2M.typeWithMeasureCM();
		M2M.typeDropMeasureCM();
		M2M.clickExact();
		M2M.clickGetPricesButton();
		Thread.sleep(1000);
		M2M.clickEnactorAddToBasket();
		Thread.sleep(1000);
	}

	@Then("^I can see product displayed in my basket$")
	public void i_can_see_product_displayed_in_my_basket() throws Throwable {
	   BasketPage basketpage = PageFactory.initElements(driver, BasketPage.class); 
	   basketpage.check_MyBasket();
	   basketpage.click_HomeDeliveryBotton();   
	
	    
	}


   @Then("^I continue to checkout$")
   public void i_continue_to_checkout() throws Throwable {
     HomeDeliveryDetailsPage homeDdetails = PageFactory.initElements(driver, HomeDeliveryDetailsPage.class);
	   homeDdetails.selectMyTitle();
	   homeDdetails.type_firstName();
	   homeDdetails.type_lastName();
	   homeDdetails.typeEmailaddress();
	   homeDdetails.type_phoneNumber();
	   homeDdetails.typeHouseNo();
	   homeDdetails.typePostcode();
	   homeDdetails.click_lookAddress();
	   Thread.sleep(1000);
	   homeDdetails.scrollToElement();
	   homeDdetails.click_deliverToAddress();
	   homeDdetails.click_continueToPayment();
	   
   }

   @Then("^My order is placed$")
   public void my_order_is_palced() throws Throwable {
	   PaymentDetailsViewPage paymentdetails =PageFactory.initElements(driver, PaymentDetailsViewPage.class);
	   paymentdetails.click_creditOrDebitCardPayment();
	   Thread.sleep(2000);
	   paymentdetails.clickVisaCardPayment();
	   paymentdetails.typeCardNumber("4444333322221111");
	   paymentdetails.typeCardCVNSecurity("123");
	   paymentdetails.SelectExpiryMonth("12");
	   paymentdetails.SelectExpiryYear("2031");
	   paymentdetails.clickPayNowButton();
	   Thread.sleep(1000);
 
}

}
