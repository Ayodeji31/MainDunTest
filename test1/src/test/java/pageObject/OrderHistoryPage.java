package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderHistoryPage extends MyBaseClass{
	
	public OrderHistoryPage(WebDriver driver){
		super(driver);
	}
	
	
	
	@FindBy(how=How.XPATH, using="//*[@id='OrderHistoryTable']/tbody/tr[1]/td[5]/a/span")
	public static WebElement Account_Details;
	
	
	
	
	public void clickOrderDetails(){
	Account_Details.click();
	}

}
