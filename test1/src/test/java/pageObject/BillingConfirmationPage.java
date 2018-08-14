package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BillingConfirmationPage extends MyBaseClass{
	
	public BillingConfirmationPage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.XPATH, using="html/body/main/section/div[1]/div[1]/div[1]/div[1]/h1")
	public static WebElement Your_Reservation;
	
	
	
	
	
	public void check_reservationIsDisplayed(){
	Your_Reservation.isDisplayed();
	}

}
