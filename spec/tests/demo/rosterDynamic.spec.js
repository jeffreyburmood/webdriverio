const LoginPage = require('../../../pages/demo/login.page.js');
const RosterPage = require('../../../pages/demo/roster.page.js');

describe('Dymanic roster suite', () => {
  it('should create single item', async () => {
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

  it('should create multiple items', async () => {
    const heros = ['Logan', 'Tony', 'Ryan', 'Chris', 'Tom'];

    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    for (let i = 0; i < heros.length; i++) {
      await RosterPage.addHeroField.setValue(heros[i]);
      await RosterPage.submitButton.click();
      await browser.pause(2000);
    }

    for (let i = 0; i < heros.length; i++) {
      await expect(await RosterPage.rosterItems[i + 5]).toHaveText(heros[i]);
    }
  });
});
