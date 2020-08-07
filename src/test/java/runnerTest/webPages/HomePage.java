package runnerTest.webPages;

import Utils.ConfigReader;
import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends ElementUtil {
    ConfigReader cr = new ConfigReader();
    LoginPage loginPage = new LoginPage();
    By header = By.xpath("//h1[@class='private-header__heading private-header__heading--solo']");
    By accountName = By.cssSelector("span.account-name ");

    By mainContactsLink = By.id("nav-primary-contacts-branch");
    By childContactsLink = By.id("nav-secondary-contacts");
    By myaccount = By.id("account-menu");

    public String getHomePageTitle() {
        return gePageTitle();
    }

    public String getHomePageHeader() {
        return getTextFromElement(header);
    }

    public String getLoggedInUserAccount() {
       clickOn(myaccount);
        return getTextFromElement(header);
    }

    public void clickOnContacts() {
        clickOn(mainContactsLink);
        clickOn(childContactsLink);
    }

    public void handleLoginPage(){
        loginPage.enterEmail(cr.getProperty("username"));
        loginPage.enterPassword(cr.getProperty("password"));
        loginPage.clickOnLogin();
    }

}
