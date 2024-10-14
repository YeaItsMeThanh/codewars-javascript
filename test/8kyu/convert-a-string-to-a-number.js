import { assert } from 'chai'

import { stringToNumber } from '../../app/8kyu/convert-a-string-to-a-number.js'

describe('stringToNumber', () => {
    it('should work for the examples', () => {
        assert.strictEqual(stringToNumber('1234'), 1234)
        assert.strictEqual(stringToNumber('605'), 605)
        assert.strictEqual(stringToNumber('1405'), 1405)
        assert.strictEqual(stringToNumber('-7'), -7)
    })
})
