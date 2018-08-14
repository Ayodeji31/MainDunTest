package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class PaymentDetailsViewPage extends MyBaseClass{
	
	public PaymentDetailsViewPage(WebDriver driver){
		    super(driver);
	}
	
	
	@FindBy(how=How.ID, using="paytype-")
	public static WebElement Credit_Or_Debit_Card;
	
	@FindBy(how=How.NAME, using="payMethodId")
	public static WebElement Pay_Pal_Payment;
	
	@FindBy(how=How.XPATH, using="//*[@id='card_type_001']")
	public static WebElement Visa_Paymentooo;
	
	@FindBy(how=How.ID, using="card_number")
	public static WebElement Card_Number;
	
	@FindBy(how=How.ID, using="card_cvn")
	public static WebElement Card_CVN_Security;
	
	@FindBy(how=How.ID, using="card_expiry_month")
	public static WebElement Month_Expiry;
	
	@FindBy(how=How.NAME, using="card_expiry_year")
	public static WebElement Expiry_Year;
	
	@FindBy(how=How.NAME, using="commit")
	public static WebElement Pay_Now_Testcard;
	
	
	
	
	public void click_creditOrDebitCardPayment(){
	Credit_Or_Debit_Card.click();
	}
	
	public void clickPayPalPayment(){
	Credit_Or_Debit_Card.click();
	}
	
	public void clickVisaCardPayment(){
	Visa_Paymentooo.click();
	}
	
	public void typeCardNumber(String text){
	Card_Number.sendKeys(text);
	}
	
	public void typeCardCVNSecurity(String text){
	Card_CVN_Security.sendKeys();
	}
	
	public void SelectExpiryMonth(String text){
	new Select(driver.findElement(By.name("card_expiry_month"))).selectByVisibleText(text);
	Month_Expiry.click();
	}
	
	public void SelectExpiryYear(String text){
	new Select(driver.findElement(By.id("card_expiry_year"))).selectByVisibleText(text);
	Expiry_Year.click();
	}
	
	public void clickPayNowButton(){
	Pay_Now_Testcard.click();
	}
	

}
