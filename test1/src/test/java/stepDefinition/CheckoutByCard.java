package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.HomeDeliveryDetailsPage;
import pageObject.LandingPage;
import pageObject.PaymentDetailsViewPage;
import pageObject.ProductPage;
import pageObject.SearchPage;

public class CheckoutByCard extends TestBase{
	
//	public WebDriver driver = getDriver();
	
	@When("^I search for items to add to basket$")
	public void i_search_for_items_to_add_to_basket() throws Throwable {
	LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);
	landinpage.type_search("Pausa Lidded Casserole Dish");
	landinpage.click_searchBtn();
	
	SearchPage searchpage = PageFactory.initElements(driver, SearchPage.class);
	searchpage.click_link_Product();

	ProductPage products = PageFactory.initElements(driver, ProductPage.class);
	products.click_quantity();
	products.clickAddToBasket();
	Thread.sleep(500);
	products.clickContinueShopnBtn();
	Thread.sleep(500);
	landinpage.type_search("30005438");
	landinpage.click_searchBtn();
	products.click_quantity();
	products.clickAddToBasket();
	new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#checkoutModel")));
//	Thread.sleep(1000);
//	productpage.clickContinueShopnBtn();
//	landinpage.click_beddingSize();
	products.clickCheckoutMode();
	Thread.sleep(1000);
	
	}

	@When("^I choose home delivery$")
	public void i_choose_home_delivery() throws Throwable {
	BasketPage basketpage =PageFactory.initElements(driver, BasketPage.class);
	basketpage.click_HomeDeliveryBotton();
	}

	@When("^I proceed with my delivery details and card details$")
	public void i_proceed_with_my_delivery_details_and_card_details() throws Throwable {
	HomeDeliveryDetailsPage homedeliverydetailspage = PageFactory.initElements(driver, HomeDeliveryDetailsPage.class);
	homedeliverydetailspage.selectMyTitle();
	homedeliverydetailspage.type_firstName();
	homedeliverydetailspage.type_lastName();
	homedeliverydetailspage.typeEmailaddress();
	homedeliverydetailspage.type_phoneNumber();
	homedeliverydetailspage.typeHouseNo();
	homedeliverydetailspage.typePostcode();
	homedeliverydetailspage.click_lookAddress();
	Thread.sleep(1000);
	homedeliverydetailspage.click_deliverToAddress();
	homedeliverydetailspage.type_shippnInstructn();
	homedeliverydetailspage.click_continueToPayment();
	PaymentDetailsViewPage paymentdetailsviewpage = PageFactory.initElements(driver, PaymentDetailsViewPage.class);
	paymentdetailsviewpage.click_creditOrDebitCardPayment();
	Thread.sleep(500);
	}

	@Then("^my order should be confirmed$")
	public void my_order_should_be_confirmed() throws Throwable {
	   
	}


}
