var assert = require('chai').assert
// Create a test suite (group) called Math
describe('Misc tests', function () {
  it('test if 6  != 7', function () {
    // Test:  6 should not equal 7
    assert.notEqual(6, 7)
  })

  it("test if 7  == '7'", function () {
    // Test:  7 should equal '7'
    assert.equal(7, '7')
  })

  !it("not equal with strict if 7  == '7'", function () {
    // Test:  strict 7 should not equal '7'
    assert.notStrictEqual(7, '7')
  })

  it('length of foo is 3', function () {
    // foo is a string of length 3
    assert.lengthOf('foo', 3)
  })

  it('length of [1,2,3,4] is 4', function () {
    // [1,2,3,4] is length 4
    assert.lengthOf([1, 2, 3, 4], 4)
  })

  it('[1,2,3,4] is array', function () {
    // [1,2,3,4] is array
    assert.isArray([1, 2, 3, 4])
  })

  it('foo is not an array', function () {
    // foo is not array
    assert.isNotArray('foo')
  })

  it('foo is not a number', function () {
    // foo is not number
    assert.isNotNumber('foo')
  })

  it('12 is a number', function () {
    // foo is not number
    assert.isNumber(12)
  })

  it('12 is not a function', function () {
    // foo is not function
    assert.isNotFunction(12)
  })

  it('foo(){} is a function', function () {
    // foo() is function
    assert.isFunction(function foo() {})
  })

  it('foo is typeOf string', function () {
    // foo() is typeOf string
    assert.typeOf('foo', 'string')
  })

  it("foo(){} is 'typeOf' function", function () {
    // foo(){} is typeOf function
    assert.typeOf(function foo() {}, 'function')
  })

  it('false is not ok', function () {
    // false is not ok
    assert.notOk(false)
  })

  it('7 == 8 is not ok', function () {
    // 7 == 8 is not ok
    assert.notOk(7 == 8)
  })

  it('10 is a number', function () {
    // 10 is a number
    assert.isNumber(10)
  })

  it('two objects are deep equal', function () {
    // var x = { a : { n: 0 } };
    // var y = { a : { n: 0 } };
    var x = { a: { n: 0 } }
    var y = { a: { n: 0 } }
    assert.deepStrictEqual(x, y)
  })

  it('two objects are not deep equal', function () {
    // var x = { a : { n: 0 } };
    // var y = { a : { n: '0' } };
    var x = { a: { n: 0 } }
    var y = { a: { n: '0' } }
    assert.notDeepEqual(x, y)
  })

  it('matches in regex', function () {
    // matching "I will pass" to /pass/);
    assert.match('I will pass', /pass/)
  })

  it('empty', function () {
    // {} is empty;
    assert.isEmpty({})
  })

  var obj = { val: 10 }
  var fn = function () {
    obj.val += 10
  }
  it('increasesBy function that increasesBy X', function () {
    // increaseBy tests function increase
    assert.increasesBy(fn, obj, 'val', 10)
  })

  it('oneOf in array', function () {
    // find number in array to make oneOf
    assert.oneOf(3, [1, 2, 3])
  })
})
