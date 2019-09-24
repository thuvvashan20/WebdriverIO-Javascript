class ActivityPage {

    get newButton() {
        return $('div.Button.Button--small.Button--primary.Omnibutton.Omnibutton--withoutSpreadsheetGrid.TopbarPageHeaderGlobalActions-omnibutton')
    }

    get taskButton() {
        return $('a.Omnibutton-dropdownButton.Omnibutton-addTask')
    }

    get taskName() {
        return $('.QuickAddTaskContents-nameInput')
    }

    get createTaskButton() {
        return $('.Button.Button--small.Button--primary.QuickAddTaskToolbar-createButton')
    }

    get searchField() {
        return $('#topbar_search_input')
    }

    get userProfile() {
        return $('.AvatarPhoto.AvatarPhoto--small.TopbarPageHeaderGlobalActions-settingsMenuAvatar.Avatar--color5')
    }

    get profile() {
        return $('span=My Profile Settings…')
    }

    get saveChange() {
        return $('div.Button.Button--medium.Button--primary')
    }

    get removeLink() {
        return $('button.PhotoUpload-removeButton.LinkButton')
    }

    get toggleButtonOn() {
        return $('label.Switch-label')
    }

    get setLastDay() {
        return $('input.ValidatedTextInput-input.textInput.textInput--large.DateInput-textInput')
    }

    get setFirstDay() {
        return $('input.textInput.textInput--large.DateInput-textInput')
    }

    get tabClick() {
        return $$('a.tabView-tabName')
    }

    get ddlClick() {
        return $('#profile_settings_weekstartday_select')
    }

    get weekSelection() {
        return $$('span.MenuItem-label')
    }

    get checkboxSelection() {
        return $$('label.Checkbox-box.Checkbox-box--unchecked.Checkbox-box--enabled.Checkbox-box--primary')
    }

    taskCreation(taskname1) {
        this.newButton.click();
        this.taskButton.click();
        this.taskName.setValue(taskname1);
        browser.pause(3000);
        this.createTaskButton.click()
    }

    search(searchValue) {
        this.searchField.setValue(searchValue);
        browser.keys("\uE007");
        browser.pause(20000);
    }

    fileUpload1() {

        this.userProfile.click();
        this.profile.click();
        browser.pause(2000);

        const fileUpload = $('input[type="file"]');
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        browser.pause(3000);
        fileUpload.waitForDisplayed();
        const path = require('path');
        const filePath = path.join(__dirname, 'download.jpeg');
        fileUpload.setValue(filePath);
        browser.pause(5000);
        this.saveChange.click();
        browser.pause(5000);
    }

    fileRemove() {
        this.userProfile.click();
        this.profile.click();
        this.removeLink.click();
        this.saveChange.click();
        browser.pause(2000);
    }

    dateSet() {
        this.userProfile.click();
        this.profile.click();
        this.toggleButtonOn.click();
        this.setFirstDay.setValue('07/16/19');
        this.setLastDay.setValue('08/15/20');
        this.saveChange.click();
        browser.pause(5000);
    }

    dateSetRemove() {
        this.userProfile.click();
        this.profile.click();
        this.setFirstDay.clearValue();
        this.setLastDay.clearValue();
        this.toggleButtonOn.click();
        this.saveChange.click();
        browser.pause(5000);
    }

    dropdownSelection() {
        this.userProfile.click();
        this.profile.click();
        this.tabClick[4].click();
        this.ddlClick.click();
        this.weekSelection[2].click();
        this.checkboxSelection[0].click();
        browser.pause(5000);
    }
}

module.exports = ActivityPage;

