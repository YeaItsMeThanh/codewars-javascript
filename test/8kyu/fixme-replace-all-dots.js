import { assert } from 'chai'

import { replaceDots } from '../../app/8kyu/fixme-replace-all-dots.js'

describe('Example Tests', function () {
    it('test dots', function () {
        assert.strictEqual(
            replaceDots('one.two.three'),
            'one-two-three',
            'Sorry, try again :-(',
        )
    })
})
