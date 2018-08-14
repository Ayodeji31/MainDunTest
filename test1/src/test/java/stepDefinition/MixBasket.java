package stepDefinition;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.LandingPage;
import pageObject.ProductPage;

public class MixBasket extends TestBase {
	
	@When("^I search for products and I add to basket$")
	public void i_search_for_products_and_I_add_to_basket(DataTable alina) throws Throwable {
	    List<List<String>> data=alina.raw();

		 LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
		 landingpage.type_search(data.get(0).get(0));
		 landingpage.click_searchBtn();

		 ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(1).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(2).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(3).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(4).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(5).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(6).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(7).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 productpage.clickContinueShopnBtn();
		 
		 landingpage.type_search(data.get(8).get(0));
		 Thread.sleep(1000);
		 landingpage.click_searchBtn();
		 productpage.click_quantity();
		 productpage.clickAddToBasket();
		 Thread.sleep(1000);
		 	   
     }
	
	@Then("^I proceed to checkout dunelm$")
	public void i_proceed_to_checkout_dunelm() throws Throwable {
		ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
		productpage.clickCheckoutMode();
		Thread.sleep(500);
		BasketPage basketpage = PageFactory.initElements(driver, BasketPage.class);
		basketpage.click_HomeDeliveryBotton();
	    
	}


}
