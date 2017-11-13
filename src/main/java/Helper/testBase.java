package Helper;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class testBase {

	//Initialising the property file reading	
	public static Properties CONFIG=null;
	public static Properties OR=null;
	public static WebDriver driver=null;
	
	
	public void intialize() throws Exception {
	//config file properties
	CONFIG = new Properties();	
	//FileInputStream fn = new FileInputStream("C:\\Selenium\\workspaceMavenProject\\BBCProject\\src\\main\\java\\Config\\config.properties");
	FileInputStream fn = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\Config\\config.properties");
	CONFIG.load(fn);
	
	
	//OR file properties reading from OB: Object repository
//	OR =new Properties();
//	FileInputStream fp = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\Config\\config.properties");
//	CONFIG.load(fp);
	
	
	//Initialize webdriver 
	if(CONFIG.getProperty("browser").equals("firefox")){
		System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");	
		driver = new FirefoxDriver();
			
	}else if (CONFIG.getProperty("browser").equals("IE")){
		System.setProperty("webdriver.ie.driver", "C:\\Selenium\\IEDriverServer.exe");
		driver = new InternetExplorerDriver();		
	}		
	else if (CONFIG.getProperty("browser").equals("chrome")){
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
	}
	driver.manage().timeouts().implicitlyWait(30,  TimeUnit.SECONDS);
}
}