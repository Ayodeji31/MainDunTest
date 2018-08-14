package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends MyBaseClass{
	public HomePage(WebDriver driver) {
		super(driver);
	
	}

	public WebDriver driver;
	
	
	
	@FindBy(how=How.XPATH, using="/html/body/main/div/h1")
	public static WebElement SignIn_Message;
	
	@FindBy(how=How.ID, using="logOff")
	public static WebElement Logoff_Link;
	
	
	
	
	
	
	
	
	public void welcome_message_display(){
	SignIn_Message.isDisplayed();
	}
	
//	public void HoverOnMyAccount(){
//		WebElement AcctSignot = driver.findElement(By.cssSelector("#headerMyAccount > svg > use"));
//		Actions action = new Actions(driver);
//		action.moveToElement(AcctSignot).build().perform();
//		
//	}
	
	public void click_signout(){
	
	Logoff_Link.click();
	}
	
	

}
