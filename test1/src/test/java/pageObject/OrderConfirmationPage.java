package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderConfirmationPage extends MyBaseClass{
	
	public OrderConfirmationPage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.XPATH, using="/html/body/main/section/div[1]/div[1]/div[1]/div[1]/h1")
	public static WebElement Reservation_Number;
	
	
	
	
	public void checkReservatnNumber(){
	Reservation_Number.isDisplayed();
	}

}
