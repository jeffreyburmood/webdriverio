class HeaderPage {
  get navToggle() {
    return $('body > div.row > div > nav > button > span');
  }
  get logoutLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }
}

module.exports = new HeaderPage();
