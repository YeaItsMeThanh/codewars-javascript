import { assert } from 'chai'

import { numberToString } from '../../app/8kyu/convert-a-number-to-a-string.js'

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(numberToString(67), '67')
    })
})
