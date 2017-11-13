package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import junit.framework.Assert;

public class RegisterPage {
	WebDriver driver;


	
	@FindBy(how=How.ID, using="day-input")
	public static WebElement mydateOfBirth;
	
	@FindBy(how=How.ID, using="month-input")
	public static WebElement mymonthOfBirth;
	
	@FindBy(how=How.ID, using="year-input")
	public static WebElement myyearOfBirth;

	@FindBy(how=How.ID, using="submit-button")
	public static WebElement submit_next;
	
	
	
	@FindBy(how=How.ID, using="email-input")
	public static WebElement myemail;
	
	@FindBy(how=How.ID, using="password-input")
	public static WebElement mypassword;
	
	@FindBy(how=How.ID, using="postcode-input")
	public static WebElement mypostcode;
	
	@FindBy(how=How.ID, using="gender-input")
	public static WebElement mygender;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"marketingOptIn\"]/div[1]/div[2]/label/div")
	public static WebElement Want_email_updates;
	
	//*[@id="marketingOptIn"]/div[1]/div[2]/label/div
	
	@FindBy(how=How.ID, using="submit-button")
	public static WebElement sumbit_register;
	
	
	@FindBy(how=How.XPATH, using="//*[@id=\"container\"]/div/div/div/div[2]/div[2]/div[2]/div/div[1]/h1/span")
	public static WebElement verify_signed_in;
	
	
		
	public void type_mydate_OfBirth(String birthday) {
		mydateOfBirth.sendKeys(birthday);
		}
	public void type_mymonth_OfBirth(String birthmonth) {
		mymonthOfBirth.sendKeys(birthmonth);
		}
	public void type_myyear_OfBirth(String birthyear) {
		myyearOfBirth.sendKeys(birthyear);
		}
	public void click_submit_next() {
		submit_next.click();
}	
	
	
	public void type_myemail(String email) {
		myemail.sendKeys(email);
		}
	public void type_mypassword(String password) {
		mypassword.sendKeys(password);
		}
	public void type_mypostcode(String Postcode) {
		mypostcode.sendKeys(Postcode);
		}
	
//new Select(driver.findElement(By.id("DobDay"))).selectByValue("15");
	
	public void type_mygender(String gender) {
	new Select (mygender).selectByValue(gender);
		}
	public void click_Want_email_updates() {
		Want_email_updates.click();
		}
	public void click_register_button() {
		sumbit_register.click();
		}
	
	
	public void click_verify_signed_in() {
	verify_signed_in.click();
		
//	public void verify_signed_in() {
//		Assert.assertEquals("Thanks. You're now signed in", verify_signed_in.getText());	
//		verify_signed_in.click();
		
	
	
}
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
