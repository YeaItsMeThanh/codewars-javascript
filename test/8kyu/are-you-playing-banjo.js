import { assert } from 'chai'

import { areYouPlayingBanjo } from '../../app/8kyu/are-you-playing-banjo.js'

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(
            areYouPlayingBanjo('Adam'),
            'Adam does not play banjo',
        )
        assert.strictEqual(
            areYouPlayingBanjo('Paul'),
            'Paul does not play banjo',
        )
        assert.strictEqual(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo')
        assert.strictEqual(
            areYouPlayingBanjo('bravo'),
            'bravo does not play banjo',
        )
        assert.strictEqual(areYouPlayingBanjo('rolf'), 'rolf plays banjo')
    })
})
