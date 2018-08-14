package stepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import module.TestBase;
import pageObject.HomeAndFurniturePage;
import pageObject.LandingPage;

public class Search extends TestBase{
	@Before
	public void setup() throws IOException{
		initialize();
	}
	
//	public WebDriver driver = getDriver();
	
	@Given("^am on the homepage$")
	public void am_on_the_homepage() throws Throwable {
	driver.get(CONFIG.getProperty("testSiteName"));	
	driver.manage().window().maximize();
	}

	@When("^I enter \"([^\"]*)\" to be searched$")
	public void i_enter_to_be_searched(String product) throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
	landingpage.type_search(product);  
	}

	@When("^I click search button$")
	public void i_click_search_button() throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class); 
	landingpage.click_searchBtn();
	Thread.sleep(1000);
	
	}

	@Then("^product should display$")
	public void product_should_display() throws Throwable {
	HomeAndFurniturePage homeandfurniturepage = PageFactory.initElements(driver, HomeAndFurniturePage.class);
	homeandfurniturepage.search_display();
	    
	}



}
