/* eslint-disable no-undef */
class InternetPage {
  get mainHeadingText() {
    return $('#content > h1');
  }

  get subHeadingText() {
    return $('#content > h2');
  }
}

module.exports = new InternetPage();
