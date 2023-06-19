const LoginPage = require('../../../pages/demo/login.page.js');
const RosterPage = require('../../../pages/demo/roster.page.js');

describe('Dymanic roster suite', () => {
  it('should create multiple items', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    await RosterPage.addHeroField.setValue('Capt Marvel');
    await RosterPage.submitButton.click();

    await expect(await RosterPage.rosterItems[5]).toHaveText('Capt Marvel');
  });

  it('should have a default list of heros', async () => {
    const heros = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];

    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    for (let i = 0; i < heros.length; i++) {
      await expect(await RosterPage.rosterItems[i]).toHaveText(heros[i]);
    }
  });
});
