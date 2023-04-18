class LoginPage {
  get headingText() {
    return $('#login-title');
  }

  get emailLable() {
    return $('#form-login > div:nth-child(1) > label');
  }

  get emailField() {
    return $('#LoginEmail');
  }

  get passwordLabel() {
    return $('#form-login > div:nth-child(2) > label');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberLoginCheckbox() {
    return $('#rememberLoginChk');
  }

  get rememberLoginLabel() {
    return $('#form-login > div.form-check > label');
  }

  get submitButton() {
    return $('#form-login > button');
  }
}
module.exports = new LoginPage();
