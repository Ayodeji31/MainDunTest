package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class HomeDeliveryDetailsPage extends MyBaseClass{

	public HomeDeliveryDetailsPage(WebDriver driver){
		super(driver);
	}
	
	
	@FindBy(how=How.ID, using="personTitle")
	public static WebElement Select_Title;
	
	@FindBy(how=How.ID, using="firstName")
	public static WebElement First_Name;
	
	@FindBy(how=How.ID, using="lastName")
	public static WebElement Last_Name;
	
	@FindBy(how=How.ID, using="emailAddress")
	public static WebElement Email_Addresss;
	
	@FindBy(how=How.ID, using="phoneNumber")
	public static WebElement Mobile_Number;
	
	@FindBy(how=How.ID, using="houseNumber")
	public static WebElement House_Number;
	
	@FindBy(how=How.ID, using="addLookup-postcode")
	public static WebElement Postcode_Lookup;
	
	@FindBy(how=How.ID, using="addressLookup")
	public static WebElement Look_Up_Address;
	
	@FindBy(how=How.ID, using="submitAddress")
	public static WebElement DeliverToThisAddress;
	
	@FindBy(how=How.ID, using="shipInstructions")
	public static WebElement Shipping_Instructions;
	
	@FindBy(how=How.ID, using="submitPayment")
	public static WebElement Continue_To_Payment;
	
	@FindBy(how=How.CSS, using="body > main > section > div.grid-wrap > div.l-checkout-main > div.l-delivery-signin.accordion > div > div.accordion-header > h3 > span")
	public static WebElement HD_Sign_In_Details;
	
	@FindBy(how=How.NAME, using="logonId")
	public static WebElement HD_Email_Addresss;
	
	@FindBy(how=How.ID, using="logonPassword")
	public static WebElement HD_PasswordPhrase;
	
	@FindBy(how=How.CSS, using="#Logon > button")
	public static WebElement HD_SignIn_Button;
	
	@FindBy(how=How.LINK_TEXT, using="Back to basket")
	public static WebElement HD_Back_to_Basket;
	
	
		
	
	
	
	
	public void selectMyTitle(){
	Select_Title.click();
	new Select(driver.findElement(By.id("personTitle"))).selectByVisibleText("Mr");
	}
	
	public void type_firstName(){
	First_Name.sendKeys("Dwane");
	}
	
	public void type_lastName(){
	Last_Name.sendKeys("Johnson");
	}
	
	public void typeEmailaddress(){
	Email_Addresss.sendKeys("ayodeji339@dunelm.com");
	}
	
	public void type_phoneNumber(){
	Mobile_Number.sendKeys("07436782308");
	}
	
	public void typeHouseNo(){
	House_Number.sendKeys("19");
	}
	
	public void typePostcode(){
	Postcode_Lookup.sendKeys("SE18 3LH");
	}
	
	public void click_lookAddress(){
	Look_Up_Address.click();
	}
	
	public void scrollToElement(){
	  WebElement DeliverToAdd =  driver.findElement(By.id("submitAddress")); 
		((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", DeliverToAdd);
//		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,-100)");
	}
	
	public void click_deliverToAddress(){
	DeliverToThisAddress.click();
	}
	
	public void type_shippnInstructn(){
	Shipping_Instructions.sendKeys("Dunelm requires signatory for this products");
	}
	
	public void click_continueToPayment(){
	Continue_To_Payment.click();
	}
	
	public void clickHomeDelivSignIn(){
	HD_Sign_In_Details.click();
	}
	
	public void typeHomeEmailAddres(String Email){
	HD_Email_Addresss.sendKeys(Email);
	}
	
	public void typeHomePassword(String Password){
	HD_PasswordPhrase.sendKeys(Password);
	}
	
	public void clickHomeSignInYourAccount(){
	HD_SignIn_Button.click();
	}
	
	public void clickHomeBack_To_BasketLink(){
	HD_Back_to_Basket.click();
	}
	
	
	
}
