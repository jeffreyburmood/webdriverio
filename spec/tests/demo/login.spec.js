const LoginPage = require('../../../pages/demo/login.page.js');
const HeaderPage = require('../../../pages/demo/header.page.js');

describe('Login Test Suite', () => {
  xit('should display error when password is missing', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Please enter an email and password'
    );

    await browser.acceptAlert();
  });
  xit('should display error when email is missing', async () => {
    await browser.url('');

    await LoginPage.passwordField.setValue('badpassword');
    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Please enter an email and password'
    );

    await browser.acceptAlert();
  });
  xit('should display error when email and password are missing', async () => {
    await browser.url('');

    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Please enter an email and password'
    );

    await browser.acceptAlert();
  });
  xit('should display error when email is incorrect', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Invalid email and password'
    );

    await browser.acceptAlert();
  });
  xit('should display error when password is incorrect', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('wrongpassword');
    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Invalid email and password'
    );

    await browser.acceptAlert();
  });
  xit('should display error when password case is incorrect', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com.com');
    await LoginPage.passwordField.setValue('PASSWORD');
    await LoginPage.submitButton.click();

    expect(await browser.getAlertText()).toContain(
      'Invalid email and password'
    );

    await browser.acceptAlert();
  });
  xit('should login with valid email and password', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    expect(await LoginPage.overlay).not.toBeDisplayed();
  });

  xit('should remember login', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');

    await LoginPage.rememberLoginCheckbox.click();
    await LoginPage.submitButton.click();

    await expect(await LoginPage.overlay).not.toBeDisplayed();

    // toggle the navigation bar
    await HeaderPage.navToggle.click();

    // logout after successful login
    await HeaderPage.logoutLink.click();

    // now the login overlay should be back in place
    await expect(await LoginPage.overlay).toBeDisplayed();

    // confirm the login credentials have been "remembered"
    await expect(await LoginPage.emailField).toHaveValue('1@2.com');
    await expect(await LoginPage.passwordField).toHaveValue('password');

    // make sure check box is still checked
    await expect(await LoginPage.rememberLoginCheckbox).toBeSelected();
  });

  it('should not remember login credentials', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');

    await LoginPage.submitButton.click();
    await expect(await LoginPage.overlay).not.toBeDisplayed();

    // toggle the navigation bar
    await HeaderPage.navToggle.click();

    // logout after successful login
    await HeaderPage.logoutLink.click();

    // now the login overlay should be back in place
    await expect(await LoginPage.overlay).toBeDisplayed();

    // confirm the login credentials have NOT been "remembered"
    await expect(await LoginPage.emailField).toHaveValue('');
    await expect(await LoginPage.passwordField).toHaveValue('');
    // make sure check box is not checked
    await expect(await LoginPage.rememberLoginCheckbox).not.toBeSelected();
  });
});
