import { assert } from 'chai'

import { howManySmaller } from '../../app/8kyu/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision.js'

describe('Tests', () => {
    it('test', () => {
        assert.deepEqual(howManySmaller([1.234, 1.235, 1.228], 1.24), 2)
        assert.deepEqual(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1)
        assert.deepEqual(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2)
    })
})
