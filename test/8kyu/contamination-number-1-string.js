import { assert } from 'chai'

import { contamination } from '../../app/8kyu/contamination-number-1-string.js'

describe('Sample tests', () => {
    it('Should pass sample tests', () => {
        assert.strictEqual(contamination('abc', 'z'), 'zzz')
        assert.strictEqual(contamination('', 'z'), '')
        assert.strictEqual(contamination('abc', ''), '')
        assert.strictEqual(contamination('_3ebzgh4', '&'), '&&&&&&&&')
        assert.strictEqual(contamination('//case', ' '), '      ')
    })
})
