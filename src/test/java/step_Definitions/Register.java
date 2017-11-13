package step_Definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import Helper.testBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;
import pages.RegisterPage;
import pages.SigninPage;

public class Register extends testBase {
	//WebDriver driver;
	
	
	
	@Given("^I am on the BBC Home Homepage$")
	public void i_am_on_the_BBC_Home_Homepage() throws Throwable {
//		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.navigate().to("https://www.bbc.co.uk/");
		driver.get(CONFIG.getProperty("testSiteName"));
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
}

	@Given("^I click Singin button$")
	public void I_click_Singin_button() throws Throwable {
	   // driver.findElement(By.linkText("sign in")).click();
		
		SigninPage signpage = PageFactory.initElements(driver,  SigninPage.class);
		signpage.click_signin();
	}

	@Given("^I click Register now$")
	public void i_click_Register_now() throws Throwable {
	    SigninPage signinpage = PageFactory.initElements(driver,  SigninPage.class);
	    signinpage.click_register_now();
}

	@Given("^I type year \"([^\"]*)\" Of Birth Year$")
	public void i_type_year_Of_Birth_Year(String birthyear) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_myyear_OfBirth(birthyear);
	}

	@Given("^I type month \"([^\"]*)\" Of Birth Month$")
	public void  i_type_month_Of_Birth_Month(String birthmonth) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_mymonth_OfBirth(birthmonth);
	}

	@Given("^I type date \"([^\"]*)\" Of Birth Day$")
	public void i_type_date_Of_Birth_Day(String birthday) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_mydate_OfBirth(birthday);   
	}

	@Then("^I click the Next button$")
	public void i_click_the_Next_button() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.click_submit_next(); 
	}
	
	
	
	

	@Then("^I type email \"([^\"]*)\" in the email address fileld$")
	public void i_type_email_in_the_email_address_fileld(String email) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_myemail(email);
	}  
	

	@Then("^I type password \"([^\"]*)\" in the password field$")
	public void i_type_password_in_the_password_field(String password) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_mypassword(password);
	}

	@Then("^I type postcode \"([^\"]*)\" in the postcode filed$")
	public void i_type_postcode_in_the_postcode_filed(String Postcode) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_mypostcode(Postcode);
	}

	@Then("^I type Gender \"([^\"]*)\" in the gender field$")
	public void i_type_Gender_in_the_gender_field(String gender) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.type_mygender(gender);
	}

	@Then("^I click No, thanks on Want email updates about more things you'll love\\?$")
	public void i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.click_Want_email_updates();
	}

	@Then("^I click Register button$")
	public void i_click_Register_button() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
	    registerpage.click_register_button();
	}

	@Then("^I verify that I am register successfully$")
	public void i_verify_that_I_am_register_successfully() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_verify_signed_in();
		
		String ExpectedMessage = "Thanks. You're now signed in."; 
		String ActualMessage = driver.findElement(By.cssSelector("#container > div > div > div > div.page__wrapper > div.page__grid-wrapper > div.page__content-wrapper > div > div:nth-child(1) > h1 > span")).getText();		
		System.out.println(ActualMessage);
		Assert.assertEquals(ExpectedMessage, ActualMessage);	
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
}