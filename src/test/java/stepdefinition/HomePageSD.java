package stepdefinition;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.webPages.Constants;
import runnerTest.webPages.HomePage;

public class HomePageSD {

    HomePage homePage = new HomePage();

    @Given("^I am on hubspot home page$")
    public void verifyHomePageTitle(){
        homePage.handleLoginPage();
        Assert.assertEquals(homePage.getHomePageTitle(), "HubSpot Login");
    }
    @When("^I get home page header$")
    public void verifyHomePageHeader(){
        Assert.assertEquals(homePage.getHomePageHeader(), Constants.HOME_PAGE_HEADER);
    }
    @And("^I get logged in user account name$")
    public void verifyAccountName(){
        Assert.assertEquals(homePage.getLoggedInUserAccount(),Constants.ACCOUNT_NAME);
    }
    @Then("^I click on contacts button$")
    public void verifyContacts(){
        homePage.clickOnContacts();
    }


}
