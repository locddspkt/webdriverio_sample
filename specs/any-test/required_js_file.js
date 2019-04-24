const assert = require('assert');
const CommonFunction = require('../../common/CommonFunction');

describe('Include CommonFunction', () => {
    it('CommonFunction', function() {
        var random = CommonFunction.getRandomString();
        assert.ok(random != '', 'Not empty');
    })
});