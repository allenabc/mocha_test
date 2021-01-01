var assert = require('assert')
// Create a test suite (group) called Math
describe('Arithmetic', function () {
  // Test One: What we're testing
  it('should test if 6 + 7  = 13', function () {
    assert.equal(6 + 7, 13)
  })
  // Test Two: A string explanation of what we're testing
  it('should test if 6 * 7 = 42', function () {
    // Test:  6 * 7  should equal 42
    assert.equal(6 * 7, 42)
  })
  // Test Three: What we're testing
  it('should test if 6 - 7  = -1', function () {
    assert.equal(6 - 7, -1)
  })
  // Test Four: A string explanation of what we're testing
  it('should test if 6 / 7 = .9', function () {
    // Test:  6 / 7  should equal .9
    assert.equal((6 / 7).toFixed(1), 0.9)
  })
})
