var data = require('../pages/data.json');

function Pages() {
    this.title = 'My page';
}
Pages.prototype.open = function () {
    browser.url(data.url)

};
module.exports = Pages;