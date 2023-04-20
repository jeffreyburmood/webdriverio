const LoginPage = require('../../../pages/demo/login.page.js');

describe('Login Test Suite', () => {
  it('should display error when password is missing', async () => {
    await browser.url('');
    await browser.pause(3000);

    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.submitButton.click();

    await browser.pause(1000);
  });
  it('should display error when email is missing', async () => {});
  it('should display error when email and password are missing', async () => {});
  it('should display error when email is incorrect', async () => {});
  it('should display error when password is incorrect', async () => {});
  it('should display error when password case is incorrect', async () => {});
  it('should login with valid email and password', async () => {});
});
