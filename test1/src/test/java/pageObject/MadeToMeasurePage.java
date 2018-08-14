package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MadeToMeasurePage extends MyBaseClass{
	
	public MadeToMeasurePage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.LINK_TEXT, using="Essentials Aladdin")
	public static WebElement Essential_Aladdind_Blinds;
	
	@FindBy(how=How.LINK_TEXT, using="Country Autumnal Auburn Taped")
	public static WebElement Country_autumal_taped;
	
	@FindBy(how=How.LINK_TEXT, using="Order sample")
	public static WebElement Order_Samples;
	
	@FindBy(how=How.ID, using="MEASUREMENTS:WIDTH")
	public static WebElement Width_Measurement;
	
	@FindBy(how=How.ID, using="MEASUREMENTS:DROP")
	public static WebElement Drop_Measurement;
	
	@FindBy(how=How.ID, using="FITTING_OPTION-Exact")
	public static WebElement Exact_Measurement;
	
	@FindBy(how=How.ID, using="get-price")
	public static WebElement Get_Price_Button;
	
	@FindBy(how=How.ID, using="add-to-bag-button")
	public static WebElement Enactor_Add_To_Basket;
	
	
	
	
	public void clickEssentialAladinsBlind(){
		Essential_Aladdind_Blinds.click();
	}
	
	public void clickCountryAutumalTapedBlind(){
		Country_autumal_taped.click();
	}
	
	public void clickOrderSample(){
	Order_Samples.click();
	}
	
	public void typeWithMeasureCM(){
	Width_Measurement.sendKeys("120");
	}
	
	public void typeDropMeasureCM(){
	Drop_Measurement.sendKeys("100");
	}
	
	public void clickExact(){
	Exact_Measurement.click();
	}
	
	public void clickGetPricesButton(){
	Get_Price_Button.click();
	}
	
	public void clickEnactorAddToBasket(){
	Enactor_Add_To_Basket.click();
	}

}
