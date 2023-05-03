const IntroPage = require('../../../pages/demo/intro.page.js');
const LoginPage = require('../../../pages/demo/login.page.js');

describe('Intro Test Suite', () => {
  it('should display correct title', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await expect(await IntroPage.titleText).toHaveText('Superhero Roster');
  });
  it('should display correct image', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await expect(await IntroPage.mainImage).toHaveAttribute(
      'src',
      './images/superhero.png'
    );
    await expect(await IntroPage.mainImage).toHaveAttribute(
      'alt',
      'Superhero Image'
    );
  });
});
