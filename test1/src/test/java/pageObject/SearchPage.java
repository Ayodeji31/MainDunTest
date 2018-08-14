package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class SearchPage {
	
	
	

	@FindBy(how=How.XPATH, using=".//*[@id='ProductListProductLink_237014']/h2")
	public static WebElement Blackout_Linen_Roller_Blind;
	

	@FindBy(how=How.LINK_TEXT, using="Pausa Lidded Casserole Dish")
	public static WebElement LinkToProduct;
	
	
	
	
	
	
	
	public void click_RollerBlind(){
		Blackout_Linen_Roller_Blind.click();
	}
	
	public void click_link_Product(){
		LinkToProduct.click();
	}
	
	

}
