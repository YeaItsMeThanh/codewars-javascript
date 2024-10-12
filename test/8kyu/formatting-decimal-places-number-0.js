import { assert } from 'chai'

import { twoDecimalPlaces } from '../../app/8kyu/formatting-decimal-places-number-0.js'

describe('twoDecimalPlaces', () => {
    it('works for some examples', () => {
        assert.strictEqual(
            twoDecimalPlaces(4.659725356),
            4.66,
            "didn't work for 4.659725356",
        )
        assert.strictEqual(
            twoDecimalPlaces(173735326.3783732637948948),
            173735326.38,
            "didn't work for 173735326.3783732637948948",
        )
        assert.strictEqual(
            twoDecimalPlaces(4.653725356),
            4.65,
            "didn't work for 4.653725356",
        )
    })
})
