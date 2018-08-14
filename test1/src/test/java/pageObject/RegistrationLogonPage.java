package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class RegistrationLogonPage extends MyBaseClass{
	public RegistrationLogonPage(WebDriver driver){
		super(driver);
	}
	
	public int random;	
	
	@FindBy(how=How.NAME, using="regLogonId")
	public static WebElement Email_Field;
	
	@FindBy(how=How.ID, using="regPassword")
	public static WebElement Password_Field;
	
	@FindBy(how=How.NAME, using="showPasswordCheckbox")
	public static WebElement Show_Password_Tick_Box;
	
	@FindBy(how=How.CSS, using="#Register > button")
	public static WebElement Create_Dunelm_Account;
	
	@FindBy(how=How.ID, using="logonId")
	public static WebElement SignIn_Email_Address;
	
	@FindBy(how=How.XPATH, using="//*[@id='logonPassword']")
	public static WebElement SignIn_Password;
	
	@FindBy(how=How.XPATH, using="//*[@id='Logon']/div/button")
	public static WebElement SignIn_Button;
	
	@FindBy(how=How.LINK_TEXT, using="Order history")
	public static WebElement Order_History_Link;
	
	@FindBy(how=How.XPATH, using="//*[@id='parsley-2804745270064941']/li")
	public static WebElement SignIn_Email_Error_Message;
	
	
	
	
	public void type_emailaddre(){
	 random = 100 + (int)(Math.random() * ((1000 - 1) + 1));
	 System.out.println(random);
	Email_Field.sendKeys("ayodeji" + random + "@gmail.com");
	System.out.println("ayodeji" + random + "@gmail.com");
	}
	
	public void type_password(){
	Password_Field.sendKeys("Trustee#01");
	}
	
	public void click_show_passwordTB(){
	Show_Password_Tick_Box.click();
	}
	
	public void click_create_account_btn(){
	Create_Dunelm_Account.click();
	}
	
	public void typeSignInEmailAddress(String email){
	SignIn_Email_Address.sendKeys(email);
	}
	
	
	public void typeSignPassword(String PassW){
	SignIn_Password.sendKeys(PassW);
	}
	
	public void clickSignInButton(){
	SignIn_Button.click();
	}
	
	public void HoverOrderHistory(){
	WebElement MyAccount = driver.findElement(By.linkText("My Account"));
	Actions action = new Actions(driver);
	action.moveToElement(MyAccount).build().perform();			
	}
	
	public void clickOrderHistory(){			
	Order_History_Link.click();
	}

	public void typeSignInEmailAddressTest(String Email) {
		SignIn_Email_Address.sendKeys(Email);
		
	}

	public void type_passwordTest(String Password) {
		SignIn_Password.sendKeys(Password);
		
	}
	
	public void checkEmailErrorMessageIsDisplayed(){			
//	SignIn_Email_Error_Message.isDisplayed();
	
	String ExpectedMessage = "Please supply a valid email address";
	
	assertEqauals(ExpectedMessage, SignIn_Email_Error_Message);
	
	
	}

	private void assertEqauals(String expectedMessage, WebElement signIn_Email_Error_Message2) {
		// TODO Auto-generated method stub
		
	}

}
