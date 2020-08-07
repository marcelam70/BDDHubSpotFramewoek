package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil {

    private By errorMessage = By.xpath("//*[@id=\"hs-login\"]/div[6]/div/h5");
    private By emailTextField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.id("loginBtn");

    public void enterEmail(String enterEmail) {
        sendValue(emailTextField, enterEmail);
    }

    public void enterPassword(String enterPassword) {

        sendValue(passwordField, enterPassword);
    }

    public void clickOnLogin() {
        webAction(loginButton).click();

    }

    public String getTextElement() {
        return getTextFromElement(errorMessage);
    }

}





