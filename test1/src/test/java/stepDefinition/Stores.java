package stepDefinition;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.StorePage;

public class Stores extends TestBase{
	
	
	@Given("^am on the store page$")
	public void am_on_the_store_page() throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.click_stores();
	}

	@Given("^the store list has been returned$")
	public void the_store_list_has_been_returned() throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.click_StoreA_Z();
	   
	}

	@When("^I select a store from the list$")
	public void i_select_a_store_from_the_list() throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.click_Dancstr_store();  
	}

	@Then("^I should be shown the store details for that store$")
	public void i_should_be_shown_the_store_details_for_that_store() throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.check_Dancstr_store_display();
	File scrFile1 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(scrFile1, new File ("C:\\Screenshots\\Store.jpg")); 
    System.out.println("Store locator Saved in C Drive");

	}

	@Given("^I enter \"([^\"]*)\" postcode in the search field$")
	public void i_enter_postcode_in_the_search_field(String postcode) throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.clear_postcode();
	storepage.type_postcode(postcode);  
	}

	@When("^I submit request$")
	public void i_submit_request() throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.click_findStoreBtn();
	Thread.sleep(1000);
	}

	@Then("^list of (\\d+) store within (\\d+) miles is displayed$")
	public void list_of_store_within_miles_is_displayed(int arg1, int arg2) throws Throwable {
	StorePage storepage = PageFactory.initElements(driver, StorePage.class);
	storepage.check_message_dispalays();
	File scrFile1 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(scrFile1, new File ("C:\\Screenshots\\Store.jpg")); 
    System.out.println("Store locator Saved in C Drive");
	}



}
