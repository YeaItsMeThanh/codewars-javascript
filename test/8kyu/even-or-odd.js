import { assert } from 'chai'

import { evenOrOdd } from '../../app/8kyu/even-or-odd.js'

describe('Sample tests', () => {
    it('2 is even', () => {
        assert.strictEqual(evenOrOdd(2), 'Even')
    })
    it('7 is odd', () => {
        assert.strictEqual(evenOrOdd(7), 'Odd')
    })
    it('-42 is even', () => {
        assert.strictEqual(evenOrOdd(-42), 'Even')
    })
    it('-7 is odd', () => {
        assert.strictEqual(evenOrOdd(-7), 'Odd')
    })
    it('0 is even', () => {
        assert.strictEqual(evenOrOdd(0), 'Even')
    })
})
