var Pages = require('../pages/Pages.js');

class LoginPage extends Pages {
    get tryNowButton() {
        return $('.horizontalNavigation-item.hidden-logged-in');
    }

    get email() {
        return $('input[name="e"]');
    }

    get password() {
        return $('input[name="p"]');
    }

    get submit() {
        return $('#login-submit-modal-login');
    }

    login(email1, password1) {

        browser.execute("arguments[0].click();", this.tryNowButton);

       // this.tryNowButton.click();
        this.email.setValue(email1);
        browser.waitUntil(() => {
            return this.password
        }, 5000, 'timed out in password');
        this.password.setValue(password1);
        this.submit.click();
    }

    open() {
        super.open('login');
    }
}

module.exports = LoginPage;

