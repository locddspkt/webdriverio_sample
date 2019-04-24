var _ = require('lodash');
CommonFunction = {
    /***
     * @return string format yyyy-MM-dd
     */
    getCurrentDateString: function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        if (month < 10) month = '0' + month;
        var date = now.getDate();
        if (date < 10) date = '0' + date;

        var hour = now.getHours();
        if (hour < 10) hour = '0' + hour;
        var second = now.getSeconds();
        if (second < 10) second = '0' + second;
        var minute = now.getMinutes();
        if (minute < 10) minute = '0' + minute;

        return '' + year + '-' + month + '-' + date;
    },
    /***
     *
     * @return {string} format yyyy-MM-dd HH:mm:ss
     */
    getCurrentDateTimeString: function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        if (month < 10) month = '0' + month;
        var date = now.getDate();
        if (date < 10) date = '0' + date;

        var hour = now.getHours();
        if (hour < 10) hour = '0' + hour;
        var second = now.getSeconds();
        if (second < 10) second = '0' + second;
        var minute = now.getMinutes();
        if (minute < 10) minute = '0' + minute;
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    },
    randomBases: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',

    /***
     * render a random string
     * @param length
     * @param seed
     * @return {string|string}
     */
    getRandomString: function (length, seed) {
        if (typeof seed == 'undefined') seed = CommonFunction.randomBases;
        if (typeof length == 'undefined') length = 10;

        var randomString = '';
        var stringLength = seed.length;
        for (var i = 1; i <= length; i++) {
            var index = Math.round(Math.random() * 1000000) % (stringLength);
            if (index > stringLength - 1) index = stringLength - 1; //make sure it on the length

            randomString += seed.substr(index, 1);
        }

        return randomString;
    },
    getDropDownTextByIndex: function ($select, index) {
        if (typeof index == 'undefined') index = 0;
        return $select.$$('option')[index].getText();
    },
    setDropdownValue: function ($dropdown, index) {
        var $$options = $dropdown.$$('option');

        var options = [];
        for (var i=0;i<$$options.length; i++) {
            options.push($$options[i].getText());
        }

        if (typeof value == 'undefined') {
            //random index
            index = _.random(0,options.length-1);
        }

        var displayValue = options[index] || '';
        $dropdown.selectByVisibleText(displayValue);
        return displayValue;
    },
}

module.exports = CommonFunction;