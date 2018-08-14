package pageObject;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import com.gargoylesoftware.htmlunit.javascript.host.file.File;

import junit.framework.Assert;

public class BasketPage extends MyBaseClass{
	
	public BasketPage(WebDriver driver){
		super(driver);
	}
	
	
	@FindBy(how=How.XPATH, using="//*[@id='content']/div/section/h1")
	public static WebElement Your_Basket_displays;
	
	@FindBy(how=How.ID, using="collectFromStore")
	public static WebElement Reserve_PayInStore;
	
	@FindBy(how=How.ID, using="js-homeDeliveryBtn")
	public static WebElement Home_Delivery;
	
//	@FindBy(how=How.XPATH, using=".//*[@id='content']/div/section/div[7]/div[3]/a")
//	public static WebElement Home_Delivery;  
	
	@FindBy(how=How.NAME, using="quantity")
	public static WebElement Basket_Quantity;
	
	@FindBy(how=How.XPATH, using=".//*[@id='content']/div/section/div[6]/div/div[1]/div/div/section[1]/a[2]/span")
	public static WebElement Remove_Item;
	
	
	
	
	
	public void check_MyBasket(){
	Assert.assertEquals("Your basket", Your_Basket_displays.getText());
	}
	
	public void click_ReserveOnline(){
	Reserve_PayInStore.click();
	}
	
	public void click_HomeDeliveryBotton(){
	Home_Delivery.click();
	}
	
	public void click_basketQuantity(){
	Basket_Quantity.click();
	new Select(driver.findElement(By.name("quantity"))).selectByVisibleText("1");	
	}
	
	public void click_remove(){
	Remove_Item.click();
	}

    }
