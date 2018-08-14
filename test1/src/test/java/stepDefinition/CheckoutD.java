package stepDefinition;

import java.io.File;

import org.apache.commons.io.FileUtils;
//import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.BasketPage;
import pageObject.HomeAndFurniturePage;
import pageObject.LandingPage;
import pageObject.ProductPage;
import pageObject.ROCSStoreSelectionPage;
import pageObject.RocsDetailViewPage;

public class CheckoutD extends TestBase{
	
//	public WebDriver driver = getDriver();
	private Object scrFile;
	
	@When("^I selected items in my basket$")
	public void i_selected_items_in_my_basket() throws Throwable {
	 LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class); 
//     WebElement RugAndDecor = driver.findElement(By.xpath(".//*[@id='header_navigation']/ul[1]/li[7]/a"));
//	 Actions action = new Actions(driver);
//	 action.moveToElement(RugAndDecor).build().perform();
	 landingpage.HoverOver();
	 landingpage.click_WallMirrorLink();
	 
	 HomeAndFurniturePage homeandfurniturepage = PageFactory.initElements(driver, HomeAndFurniturePage.class);
	 homeandfurniturepage.clickClearEdgeMirror();
	 
	 ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
	 productpage.click_quantity();
	 productpage.clickAddToBasket();
	 productpage.clickContinueShopnBtn();
	 Thread.sleep(500);
	 
//	 WebElement RugAndDecor1 = driver.findElement(By.xpath(".//*[@id='header_navigation']/ul[1]/li[7]/a"));
//	 Actions action1 = new Actions(driver);
//	 action.moveToElement(RugAndDecor1).build().perform();
	 landingpage.HoverOver();
	 productpage.clickDressingTableMirrors();
	 
	 homeandfurniturepage.clickBlakelyCottonVanityMirror();
	 productpage.click_quantity();
	 productpage.clickAddToBasket();
	 Thread.sleep(1000);
	 
	}

	@When("^proceed to checkout$")
	public void proceed_to_checkout() throws Throwable {
	ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
	productpage.clickCheckoutMode();  
	}

	@Then("^I should be able to see list of delivery options$")
	public void i_should_be_able_to_see_list_of_delivery_options() throws Throwable {
	BasketPage basketpage = PageFactory.initElements(driver, BasketPage.class); 
	basketpage.check_MyBasket();
	File scrFile1 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(scrFile1, new File ("C:\\Screenshots\\Basket.jpg")); 
    System.out.println("Your basket Saved in C Drive");
    
    
	basketpage.click_basketQuantity();
	basketpage.click_ReserveOnline();
	Thread.sleep(1000);
	
	ROCSStoreSelectionPage reserveonline = PageFactory.initElements(driver, ROCSStoreSelectionPage.class);
	reserveonline.typeTo_checkStock();
	reserveonline.click_checkStockBtn();
	reserveonline.click_CollectInNottinham();
	
	RocsDetailViewPage details = PageFactory.initElements(driver, RocsDetailViewPage.class);
	details.select_title();
	details.type_firstname();
	details.type_lastname();
	details.type_emailAddress();
	details.type_phoneNumber();
	details.click_reserveAtConventryBtn();

	    
	}



}
