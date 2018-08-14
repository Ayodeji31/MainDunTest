package module;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class TestBase{
	
//	public static WebDriver driver;
//	
//	public static WebDriver getDriver(){
//		
//		if(driver== null){
//			System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
//			driver = new ChromeDriver();
//		}
//		return driver;
//	}
	
	
	

public static Properties CONFIG=null;
public static WebDriver driver=null;

public void initialize() throws IOException{
	
if (driver == null){


CONFIG= new Properties();
FileInputStream fn = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\config\\config.properties");
CONFIG.load(fn);




if (CONFIG.getProperty("browser").equals("firefox")){
	System.setProperty("webdriver.gecko.driver", "C:\\geckodriver.exe");
     driver = new FirefoxDriver();
     //"C:\geckodriver.exe"

 }else if ((CONFIG.getProperty("browser").equals("IE"))){
	 DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
	 capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
	 File file = new File("C:\\New folder\\IEDriverServer.exe");
	 System.setProperty("webdriver.ie.driver", file.getAbsolutePath());
	 driver = new InternetExplorerDriver(capabilities);
//    System.setProperty("webdriver.ie.driver","C:\\IEDriverServer.exe");
//     driver = new InternetExplorerDriver();

 }else if ((CONFIG.getProperty("browser").equals("chrome"))){
     System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
     driver = new ChromeDriver();
 
 }

  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	
}
}
}




