import { assert } from 'chai'

import { grow } from '../../app/8kyu/beginner-reduce-but-grow.js'

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(grow([1, 2, 3]), 6)
        assert.strictEqual(grow([4, 1, 1, 1, 4]), 16)
        assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64)
    })
})
