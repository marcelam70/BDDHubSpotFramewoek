package stepdefinition;
import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;


public class LoginSD {


    private LoginPage loginPage = new LoginPage();

    @Given("^I am on hubspot login page$")
    public void iAmOnHomePage(){
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://app.hubspot.com/login/");
    }

    @When("^I enter (.+) into (username|password) field on the hubspot login page$")
    public void enterDataUserAndPAssField(String anyText, String textField){

        switch (textField){
            case "username":
                loginPage.enterEmail(anyText);
                break;
            case "password":
                loginPage.enterPassword(anyText);
                break;
        }
    }

    @And("^I click on login button on hubspot login page$")
    public void verifyLogin(){
       loginPage.clickOnLogin();


    }

    @Then("^I verify invalid login hubspot login on sign in page$")
    public void verifyErrorMessage(){
        Assert.assertEquals(loginPage.getTextElement(), "This doesn't look right.");

    }
}
