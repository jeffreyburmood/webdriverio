class HeaderPage {
  get navToggle() {
    return $('body > div.row > div > nav > button > span');
  }
  get logoutLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }
  get linkLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(2) > a');
  }
  get heroFactsLink() {
    return $('#navbarDropdown');
  }
  get wolverineOption() {
    return $(
      '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)'
    );
  }
  get spidermanOption() {
    return $(
      '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)'
    );
  }
  get searchField() {
    return $('#search-box');
  }
  get searchButton() {
    return $('#search-form > button');
  }
  // modal window selectors
  get modalWolverineWindow() {
    return $('#wolverineModal');
  }
  get modalWolverineTitleText() {
    return $('#wolverineModalLabel');
  }
  get modalWolverineContentText() {
    return $('#wolverineModal > div > div > div.modal-body');
  }
  get modalWolverineCloseButton() {
    return $('#wolverineModal > div > div > div.modal-footer > button');
  }
  get modalSpidermanWindow() {
    return $('#spidermanModal');
  }
  get modalSpidermanTitleText() {
    return $('#spidermanModalLabel');
  }
  get modalSpidermanContentText() {
    return $('#spidermanModal > div > div > div.modal-body');
  }
  get modalSpidermanCloseButton() {
    return $('#spidermanModal > div > div > div.modal-footer > button');
  }
}

module.exports = new HeaderPage();
