import { assert } from 'chai'

import { makeNegative } from '../../app/8kyu/return-negative.js'

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(makeNegative(42), -42)
    })
})
