package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class StorePage extends MyBaseClass{
	public StorePage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.LINK_TEXT, using="Stores")
	public static WebElement Store_Links;
	
	@FindBy(how=How.XPATH, using="html/body/main/section/div[1]/nav/a[2]")
	public static WebElement Store_A_Z;
	
	@FindBy(how=How.XPATH, using=".//*[@id='storesList']/ul/li[2]/a")
	public static WebElement Doncaster_Store;
	
	@FindBy(how=How.XPATH, using=".//*[@id='content']/section/div[2]/div/div[1]/h1")
	public static WebElement Doncaster_Stores_displays;
	
	@FindBy(how=How.ID, using="search-stores")
	public static WebElement Enter_Postcode_Field;
	
	@FindBy(how=How.ID, using="findStore")
	public static WebElement Find_store_Button;
	
	@FindBy(how=How.XPATH, using="html/body/main/section/h1")
	public static WebElement Dunelm_Store_Near_You;
	
	
	
	
	
	
	

	public void click_stores(){
	Store_Links.click();
	}
	
	public void click_StoreA_Z(){
	Store_A_Z.click();
	}
	
	public void click_Dancstr_store(){
	Doncaster_Store.click();
	}
	
	public void check_Dancstr_store_display(){
	Doncaster_Stores_displays.isDisplayed();
	}
	
	public void clear_postcode(){
	Enter_Postcode_Field.clear();
	}
	
	public void type_postcode(String postcode){
	Enter_Postcode_Field.sendKeys(postcode);
	}
	
	public void click_findStoreBtn(){
	Find_store_Button.click();
	}
	
	public void check_message_dispalays(){
	Dunelm_Store_Near_You.isDisplayed();
	}


}
