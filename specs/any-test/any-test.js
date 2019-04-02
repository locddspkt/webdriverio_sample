const assert = require('assert');
describe('Case 1 with 2 sub OK', () => {
    it('any OK', () => {
        assert.ok(true,'Success');
    });

    it('and 2nd', () => {
        assert.ok(true,'Success 2');
    });
});

describe('Case 2 with 1 OK + 1 false', () => {
    it('OK', () => {
        assert.ok(true,'Success 3');
    });

    it('FAILURE', () => {
        assert.ok(false,'Failure');
    });
});