import { assert } from 'chai'

import { replaceDots } from '../../app/8kyu/fixme-replace-all-dots.js'

describe('Example Tests', () => {
    it('test dots', () => {
        assert.strictEqual(
            replaceDots('one.two.three'),
            'one-two-three',
            'Sorry, try again :-(',
        )
    })
})
