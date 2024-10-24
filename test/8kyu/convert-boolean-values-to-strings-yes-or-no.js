import { assert } from 'chai'

import { boolToWord } from '../../app/8kyu/convert-boolean-values-to-strings-yes-or-no.js'

describe('Basic tests', () => {
    it('Testing for basic tests', () => {
        assert.strictEqual(boolToWord(true), 'Yes')
        assert.strictEqual(boolToWord(false), 'No')
    })
})
