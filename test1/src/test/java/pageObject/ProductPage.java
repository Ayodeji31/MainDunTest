package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;



public class ProductPage extends MyBaseClass{
public ProductPage(WebDriver driver){
	super(driver);
}
	
	@FindBy(how=How.ID, using="attrBlind Size")
	public static WebElement Blind_Size;
	
	@FindBy(how=How.CSS, using="option[value=\"2\"]")
	public static WebElement Blind_Quantity;
	
	@FindBy(how=How.ID, using="add2CartBtn")
	public static WebElement Add_Basket;
	
	@FindBy(how=How.XPATH, using=".//*[@id='product']/div[2]/div[2]/div/div/div/div[2]/div[1]/div[2]/p/button")
	public static WebElement Continue_Shopping;
	
	@FindBy(how=How.LINK_TEXT, using="Lighting Collections")
	public static WebElement Lighting_Collection;
	
	@FindBy(how=How.CSS, using= "#add2CartBtn_273383")
	public static WebElement Add_Lighting_To_Basket;
	
	@FindBy(how=How.CSS, using="#checkoutModel")
	public static WebElement CheckoutMate_Main;	

	@FindBy(how=How.XPATH, using=".//*[@id='swatchImage_30063695']")
	public static WebElement RollerBlind_Colour;
	
	@FindBy(how=How.ID, using="attrBlind Size")
	public static WebElement RollerBlind_Size;
	
	@FindBy(how=How.ID, using="attrBedding Size")
	public static WebElement Bedding_Size;
	
	@FindBy(how=How.ID, using="quantity")
	public static WebElement Quantity0001;
	
	@FindBy(how=How.LINK_TEXT, using="Candle Holders")
	public static WebElement Dressing_Mirror_Table;
	 	
	
	

	public void click_blindsize(){
	Blind_Size.click();
	new Select(driver.findElement(By.id("attrBlind Size"))).selectByVisibleText("Drop 163cm (64\") x 61cm (24\") £12.99");
		 
	}
	
	public void click_quantity(){
//	new Select(driver.findElement(By.name("quantity"))).selectByVisibleText("Qty (1)");
//	Blind_Quantity.click();
		
	WebElement select_quantity = driver.findElement(By.name("quantity"));
	Select quantity = new Select(select_quantity);
	quantity.selectByIndex(0);
		
	}
	
	public void clickAddToBasket(){
	Add_Basket.click();
	}
	
	public void clickContinueShopnBtn(){
	Continue_Shopping.click();
	}
	
	
	public void click_lightCollection(){
	Lighting_Collection.click();
	}
	
	public void click_light_Add_Basket(){
	Add_Lighting_To_Basket.click();
	}
	
	public void click_RollBlindColour(){
	RollerBlind_Colour.click();
	}
	
	public void clickLinenRollerBlind_SIze(){
	RollerBlind_Size.click();	
	new Select(driver.findElement(By.id("attrBlind Size"))).selectByVisibleText("Drop 163cm (64\") x W 153cm (60\") £26.99");
	}
	
	public void clickRoller_quantity(){
	new Select(driver.findElement(By.id("quantity"))).selectByVisibleText("Qty (1)");
	Blind_Quantity.click();
	}
	
	public void clickCheckoutMode(){
	new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#checkoutModel")));
	CheckoutMate_Main.click();
	}
	
	public void click_beddingSize(){
	Bedding_Size.click();
	new Select(driver.findElement(By.id("attrBedding Size"))).selectByVisibleText("Kingsize £19.99");
	}
	
	public void click_Quantity00(){
	Quantity0001.click();
	new Select(driver.findElement(By.name("quantity"))).selectByVisibleText("Qty (1)");
	}
	
	public void clickDressingTableMirrors(){
	Dressing_Mirror_Table.click();
	}
	
	
}
