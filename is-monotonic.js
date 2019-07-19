/**
 * Check that given series is strictly increasing
 *
 * @param {Array} series
 *
 * @return {Boolean}
 */
function isMonotonicIncreasing (series) {
  return series.reduce((isIncreasing, currentValue, currentIndex, array) => {
    if (currentIndex === 0) return true

    if (!isIncreasing) return false

    const previousValue = array[currentIndex - 1]

    return previousValue < currentValue
  })
}

/**
 * Check that given series is strictly decreasing
 *
 * @param {Array} series
 *
 * @return {Boolean}
 */
function isMonotonicDecreasing (series) {
  return series.reduce((isDecreasing, currentValue, currentIndex, array) => {
    if (currentIndex === 0) return false

    if (!isDecreasing) return false

    const previousValue = array[currentIndex - 1]

    return previousValue > currentValue
  })
}

module.exports = {
  isMonotonicDecreasing,
  isMonotonicIncreasing
}
