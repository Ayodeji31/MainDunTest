package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LandingPage extends MyBaseClass{
	
	public LandingPage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.ID, using="search")
	public static WebElement Search_Field;
	
	@FindBy(how=How.ID, using="search_submit")
	public static WebElement Search_Button;
	
	@FindBy(how=How.CSS, using="#headerMyAccount")
	public static WebElement SignIn_Link;
	
	@FindBy(how=How.LINK_TEXT, using="Wall Mirrors")
	public static WebElement AllWall_Mirror;
	
	@FindBy(how=How.ID, using="js-email")
	public static WebElement PopEmail;
	
	@FindBy(how=How.ID, using="js-cancel")
	public static WebElement CancelPop;
	
	@FindBy(how=How.ID, using="dialog_submit")
	public static WebElement PopSubmit;
	
	@FindBy(how=How.LINK_TEXT, using="Made To Measure Curtains")
	public static WebElement Made_To_Measure_Curtain;
	
	@FindBy(how=How.LINK_TEXT, using="M2M Wooden Venetian Blinds")
	public static WebElement Wood_Venetian_Blind;
	
	@FindBy(how=How.LINK_TEXT, using="M2M Metal Venetian Blinds")
	public static WebElement Wood_Metal_Blind;
	
	
	
		
	
	
	public void type_search(String product){
		Search_Field.sendKeys(product);
	}
	
	public void click_searchBtn(){
		Search_Button.click();
	}
	
	public void click_signIn(){
		SignIn_Link.click();
	}
	
	public void click_WallMirrorLink(){
		AllWall_Mirror.click();
	} 
	
	public void type_Email(){
		PopEmail.sendKeys("ayodeji734@gmail.com");
	}
	
	public void click_NoThanks(){
		CancelPop.click();
	}
	
	public void click_SubmitPopup(){
		PopSubmit.click();
	}
	
	public void HoverOver(){
	WebElement RugAndDecor = driver.findElement(By.xpath("//*[@id='header_navigation']/ul/li[17]/a"));
	Actions action = new Actions(driver);
	action.moveToElement(RugAndDecor).build().perform();
	}
	
	public void HoverOverCurtainsAndBlind(){
	WebElement CurtainsAndBlind = driver.findElement(By.xpath("//*[@id='header_navigation']/ul/li[11]/a"));
	Actions action = new Actions(driver);
	action.moveToElement(CurtainsAndBlind).build().perform();
	}
	
	public void clickMadeToMeasureCurt(){
	Made_To_Measure_Curtain.click();
	}
	
	public void clickWoodenVenitianBlind(){
	Wood_Venetian_Blind.click();
	}
	
	public void clickMetalVenitianBlind(){
	Wood_Metal_Blind.click();
	
	}
	
	
	
	

}
