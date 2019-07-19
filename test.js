const assert = require('assert')

const { isMonotonicIncreasing, isMonotonicDecreasing } = require('./is-monotonic.js')

assert.ok(isMonotonicIncreasing([1, 2, 3, 4]))
assert.ok(!isMonotonicIncreasing([1, 3, 2, 4]))

assert.ok(isMonotonicDecreasing([4, 3, 2, 1]))
assert.ok(!isMonotonicDecreasing([4, 2, 3, 1]))
