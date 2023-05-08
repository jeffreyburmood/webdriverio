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
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';
    await expect(
      $('body > div.container-fluid > div:nth-child(3) > div > p')
    ).toHaveTextContaining(instructions);

    const title = 'Build Your Superhero Roster:';
    await expect(await RosterPage.listTitle.getText()).toHaveTextContaining(
      title
    );
    await expect(await RosterPage.wolverineItem.getText()).toHaveText(
      'Wolverine'
    );
    await expect(await RosterPage.ironmanItem.getText()).toHaveText('Ironman');
    await expect(await RosterPage.deadpoolItem.getText()).toHaveText(
      'Deadpool'
    );
    await expect(await RosterPage.thorItem.getText()).toHaveText('Thor');
    await expect(await RosterPage.spidermanItem.getText()).toHaveText(
      'Spider-Man'
    );
    await expect(await RosterPage.addHeroLabel.getText()).toHaveText(
      'ADD A SUPERHERO'
    );
    await expect(
      await RosterPage.addHeroField.getAttribute('placeholder')
    ).toHaveText('Enter Hero');
  });
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
  it('should do something else', async () => {});
});
