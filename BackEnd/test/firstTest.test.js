const assert = require('chai').assert;
const first = require('../first');

describe('First', function () {
    it('will return hello world', function () {
        assert.equal(first(),"hello world")
    })
})