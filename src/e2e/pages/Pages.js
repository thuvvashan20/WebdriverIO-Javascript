function Pages() {
    this.title = 'My page';
}

Pages.prototype.open = function () {
    browser.url('https://asana.com/')

};

module.exports = Pages;