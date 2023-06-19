const LoginPage = require('../../../pages/demo/login.page.js');
const RosterPage = require('../../../pages/demo/roster.page.js');
const HeaderPage = require('../../../pages/demo/header.page.js');

describe('Roster Test Suite', () => {
  it('should have default values', async () => {
    await browser.url('');

    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    const results = await $(
      'body > div.container-fluid > div:nth-child(3) > div > p'
    ).getText();
    console.log('instructions = ' + results);
    const instructions =
      'Imagine that you are tasked with building a team of Superheros';
    await expect(
      $('body > div.container-fluid > div:nth-child(3) > div > p')
    ).toHaveTextContaining(instructions);

    const title = 'Build Your Superhero Roster:';
    await expect(await RosterPage.listTitle).toHaveTextContaining(title);
    await expect(await RosterPage.wolverineItem).toHaveText('Wolverine');
    await expect(await RosterPage.ironmanItem).toHaveText('Iron Man');
    await expect(await RosterPage.deadpoolItem).toHaveText('Deadpool');
    await expect(await RosterPage.thorItem).toHaveText('Thor');
    await expect(await RosterPage.spidermanItem).toHaveText('Spider-Man');
    await expect(await RosterPage.addHeroLabel).toHaveText('ADD A SUPERHERO');
    await expect(await RosterPage.addHeroField).toHaveAttribute(
      'placeholder',
      'Enter Hero'
    );
  });
});
