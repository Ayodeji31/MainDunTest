package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import module.TestBase;

public class RocsDetailViewPage extends MyBaseClass{
	
	public RocsDetailViewPage(WebDriver driver){
		super(driver);
	}
	
//	public WebDriver driver = getDriver();

	
	
	@FindBy(how=How.ID, using="personTitle")
	public static WebElement Title_Field;
	
	@FindBy(how=How.ID, using="firstName")
	public static WebElement FirstName_Field;
	
	@FindBy(how=How.ID, using="lastName")
	public static WebElement LastName_Field;
	
	@FindBy(how=How.ID, using="emailAddress")
	public static WebElement Email_AddressField;
	
	@FindBy(how=How.ID, using="phoneNumber")
	public static WebElement Phone_Number_Field;
	
	@FindBy(how=How.ID, using="ROCSplaceOrder")
	public static WebElement ReserveAtConventry;
	
	
	
	
	public void select_title(){
	Title_Field.click();
	new Select(driver.findElement(By.id("personTitle"))).selectByVisibleText("Mr");
	}
	
	public void type_firstname(){
	FirstName_Field.sendKeys("Donnell");
	}
	
	public void type_lastname(){
	LastName_Field.sendKeys("Jones");
	}
	
	public void type_emailAddress(){
	Email_AddressField.sendKeys("ayodeji300@gmail.com");
	}
	
	public void type_phoneNumber(){
	Phone_Number_Field.sendKeys("07437823498");
	}
	

	public void click_reserveAtConventryBtn(){
	ReserveAtConventry.click();
	}
	
	
	
	
	
	
	
	
}
