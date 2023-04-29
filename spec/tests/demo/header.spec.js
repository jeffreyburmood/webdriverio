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
  it('should open Wolverine modal', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();
    await HeaderPage.heroFactsLink.click();
    await HeaderPage.wolverineOption.click();

    //await expect(await HeaderPage.modalWolverineWindow).toBeDisplayed();
    await expect(await HeaderPage.modalWolverineTitleText).toHaveValue(
      'Wolverine Fact'
    );
    await expect(
      await HeaderPage.modalWolverineContentText
    ).toHaveValueContaining('Wolverine made his first comic');
  });
});
