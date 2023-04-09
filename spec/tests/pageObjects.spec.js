/* eslint-disable no-undef */
const InternetPage = require('../../pages/internet.page');

describe('Page Object Tests', () => {
  it('should use a page object', async () => {
    await browser.url('https://the-internet.herokuapp.com');
    console.log(
      'Main heading ' + (await InternetPage.mainHeadingText.getText())
    );
    console.log('Sub heading ' + (await InternetPage.subHeadingText.getText()));
  });
});
