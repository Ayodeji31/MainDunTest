package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomeAndFurniturePage extends MyBaseClass{
	
	public HomeAndFurniturePage(WebDriver driver){
		super(driver);
	}

	
	@FindBy(how=How.CSS, using="h1")
	public static WebElement Search_Result;
	
	@FindBy(how=How.ID, using="ProductImage_236794")
	public static WebElement Green_Solar;
	
	@FindBy(how=How.ID, using="ProductImage_281857")
	public static WebElement Glitter_Ball_Lighting;
	
	@FindBy(how=How.ID, using="ProductListProductLink_221178")
	public static WebElement Forgaty_Tog_Duvet;
	
	@FindBy(how=How.LINK_TEXT, using="Swept Bevelled Mirror")
	public static WebElement OClear_Edge_Mirror;
	
	@FindBy(how=How.LINK_TEXT, using="White Wooden Lantern")
	public static WebElement Blakely_Vanity_Mirror;
	
	
	
	
	public void search_display(){
		Search_Result.isDisplayed();
	}
	
	public void click_greenSolarBlind(){
		Green_Solar.click();
	}
	
	public void click_glitterBallLight(){
	Glitter_Ball_Lighting.click();
	}
	
	public void click_forgartyTogDuv(){
	Forgaty_Tog_Duvet.click();
	}
	
//	public void scrollToElement(WebElement ClearEdgeMirror){
//		((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", ClearEdgeMirror);
//		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,-100)");
//	}
	
	public void clickClearEdgeMirror(){
//	WebElement ClearEdgeMirror = driver.findElement(By.linkText("Oram Hanging Mirror"));
//	scrollToElement(ClearEdgeMirror);
//	ClearEdgeMirror.click();
	OClear_Edge_Mirror.click();
	
	}
	
	public void clickBlakelyCottonVanityMirror(){
	Blakely_Vanity_Mirror.click();
	}
		
}
