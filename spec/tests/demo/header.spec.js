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

    await expect(await HeaderPage.modalWolverineWindow).toBeDisplayed();
    await expect(await HeaderPage.modalWolverineTitleText).toHaveText(
      'Wolverine Fact'
    );
    await expect(
      await HeaderPage.modalWolverineContentText
    ).toHaveTextContaining('Wolverine made his first comic');
  });
  it('should close Wolverine modal', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();
    await HeaderPage.heroFactsLink.click();
    await HeaderPage.wolverineOption.click();

    await expect(await HeaderPage.modalWolverineWindow).toBeDisplayed();
    await expect(await HeaderPage.modalWolverineTitleText).toHaveText(
      'Wolverine Fact'
    );
    await HeaderPage.modalWolverineCloseButton.click();
    expect(await HeaderPage.modalWolverineWindow).not.toBeDisplayed();
  });
  it('should open Spiderman modal', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();
    await HeaderPage.heroFactsLink.click();
    await HeaderPage.spidermanOption.click();

    await expect(await HeaderPage.modalSpidermanWindow).toBeDisplayed();
    await expect(await HeaderPage.modalSpidermanTitleText).toHaveText(
      'Spider-Man Fact'
    );
    await expect(
      await HeaderPage.modalSpidermanContentText
    ).toHaveTextContaining('Spider-man was created by');
  });
  it('should close Spider-Man modal', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();
    await HeaderPage.heroFactsLink.click();
    await HeaderPage.spidermanOption.click();

    await expect(await HeaderPage.modalSpidermanWindow).toBeDisplayed();
    await expect(await HeaderPage.modalSpidermanTitleText).toHaveText(
      'Spider-Man Fact'
    );
    await HeaderPage.modalSpidermanCloseButton.click();
    expect(await HeaderPage.modalSpidermanWindow).not.toBeDisplayed();
  });
  it('should search for Wolverine', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();

    await HeaderPage.searchField.setValue('Wolverine');
    await HeaderPage.searchButton.click();

    expect(await browser.getAlertText()).toContain('Wolverine is awesome!');

    await browser.acceptAlert();
  });
  it('should error because did not search for Wolverine', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await HeaderPage.navToggle.click();

    await HeaderPage.searchField.setValue('NotWolverine');
    await HeaderPage.searchButton.click();

    expect(await browser.getAlertText()).toContain(
      'Your search for NotWolverine returned 0 reults. Try something else.'
    );

    await browser.acceptAlert();
  });
});
