import { assert } from 'chai'

import { remove } from '../../app/8kyu/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence.js'

describe('tests', () => {
    function doTest(input, expected) {
        const actual = remove(input)
        assert.strictEqual(actual, expected, `for string:\n"${input}"\n`)
    }

    it('It should work for basic tests', () => {
        doTest('Hi!', 'Hi')
        doTest('Hi!!!', 'Hi')
        doTest('!Hi', '!Hi')
        doTest('!Hi!', '!Hi')
        doTest('Hi! Hi!', 'Hi! Hi')
        doTest('Hi', 'Hi')
    })
})
