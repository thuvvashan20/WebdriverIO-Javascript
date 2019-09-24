var LoginPage = require('../pages/LoginPage.js');
var ActivityPage = require('../pages/Activity.js');
var data = require('../pages/data.json');

var login = new LoginPage();
var activity = new ActivityPage();
const assert = require('assert');


describe('Check asana login and other activities', function () {

    before(function () {
        login.open();
        login.login(data.username, data.password);
    });

    it('should upload the file', function () {
        activity.fileUpload1();
    });

    it('should remove the uploaded image', function () {
        activity.fileRemove();
        const title = browser.getTitle();
        assert.strictEqual(title, 'Home - Asana');
    });

    it('should set the date', function () {
        activity.dateSet();
        activity.dateSetRemove();
    });

    it('should select from ddl and the checkbox', function () {
        activity.dropdownSelection();
    });

    it('should create and search the task', function () {
        activity.taskCreation(data.taskname);
        activity.search(data.taskname);
    });
});
