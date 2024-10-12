import { assert } from 'chai'

import { repeatStr } from '../../app/8kyu/string-repeat.js'

describe('Tests', () => {
    it('Basic tests', () => {
        assert.strictEqual(repeatStr(3, '*'), '***')
        assert.strictEqual(repeatStr(5, '#'), '#####')
        assert.strictEqual(repeatStr(2, 'ha '), 'ha ha ')
    })
})
