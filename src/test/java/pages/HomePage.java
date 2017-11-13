package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage {
	WebDriver driver;
	
	@FindBy(how=How.LINK_TEXT, using="Sign in")
	public static WebElement sign_in;
	
	@FindBy(how=How.ID, using="orb-search-q")
	public static WebElement search;
	
	
	public void my_signin() {
		sign_in.click();
	}	
		public void my_search() {
			search.sendKeys("Premier League");

	}
}
