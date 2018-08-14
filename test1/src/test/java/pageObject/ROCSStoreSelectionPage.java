package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ROCSStoreSelectionPage extends MyBaseClass{
	
	
	public ROCSStoreSelectionPage(WebDriver driver){
		super(driver);
	}
	
	
	@FindBy(how=How.ID, using="location")
	public static WebElement Check_Stock_Field;
	
	@FindBy(how=How.ID, using="findAddress")
	public static WebElement Check_Stock_Button;
	
	@FindBy(how=How.XPATH, using="/html/body/main/section/div/section[2]/ul/li[1]/a")
	public static WebElement CollectInDunstable;
	
	
	
	
	public void typeTo_checkStock(){
	Check_Stock_Field.sendKeys("Derby");
	}
	
	public void click_checkStockBtn(){
	Check_Stock_Button.click();
	}
	
	public void click_CollectInNottinham(){
		CollectInDunstable.click();
	}

}
