import { assert } from 'chai'

import { solution } from '../../app/8kyu/reversed-strings.js'

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(solution('world'), 'dlrow')
        assert.strictEqual(solution('hello'), 'olleh')
        assert.strictEqual(solution(''), '')
        assert.strictEqual(solution('h'), 'h')
    })
})
