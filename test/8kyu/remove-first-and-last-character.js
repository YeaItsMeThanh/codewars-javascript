import { assert } from 'chai'

import { removeChar } from '../../app/8kyu/remove-first-and-last-character.js'

describe('Tests', () => {
    it('Fixed Tests', () => {
        assert.strictEqual(removeChar('eloquent'), 'loquen')
        assert.strictEqual(removeChar('country'), 'ountr')
        assert.strictEqual(removeChar('person'), 'erso')
        assert.strictEqual(removeChar('place'), 'lac')
        assert.strictEqual(removeChar('ooopsss'), 'oopss')
    })
})
