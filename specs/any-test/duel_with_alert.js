const assert = require('assert');
describe('duel_with_alert.js', () => {
    it('Alert and then turn off', async () => {
        browser.url('http://sample.com/');

        //press OK
        browser.executeAsync('alert("sample alert popup")');
        pause(1000);
        var alertMessage = browser.getAlertText();
        assert.ok( alertMessage != '','Show alert');
        pause(1000);
        browser.acceptAlert();

        //press Cancel
        browser.executeAsync('alert("sample alert popup")');
        pause(1000);
        var alertMessage = browser.getAlertText();
        assert.ok( alertMessage != '','Show alert');
        pause(1000);
        browser.dismissAlert();

    });
});