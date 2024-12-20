import { assert } from 'chai'

import { simpleMultiplication } from '../../app/8kyu/simple-multiplication.js'

describe('Basic Tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(
            simpleMultiplication(2),
            16,
            'Should return given argument times eight...',
        )
        assert.strictEqual(
            simpleMultiplication(1),
            9,
            'Should return given argument times nine...',
        )
        assert.strictEqual(
            simpleMultiplication(8),
            64,
            'Should return given argument times eight...',
        )
        assert.strictEqual(
            simpleMultiplication(4),
            32,
            'Should return given argument times eight...',
        )
        assert.strictEqual(
            simpleMultiplication(5),
            45,
            'Should return given argument times nine...',
        )
    })
})
