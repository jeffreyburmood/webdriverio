const HeaderPage = require('../../../pages/demo/header.page.js');
const LoginPage = require('../../../pages/demo/login.page.js');

describe('Header Test Suite', () => {
  it('should redirect to new site', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await expect(await HeaderPage.linkLink).toHaveLink(
      'https://glitchitsystem.com/'
    );
  });
  it('should ', async () => {});
});
