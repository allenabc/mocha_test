$ mkdir mocha_test
$ cd mocha_test
$ npm init
$ npm install mocha

$ mkdir test
$ cd test
make a file called 
test.js

# Add this text to it

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


$ cd ..

edit package.json

Change the line with scripts in it to read

"scripts": {
  "test": "mocha"
}


# Execute from the command line

$ npm test

Expect to see

$ npm test

> Mocha_test@1.0.0 test <full path>/Mocha_test
> mocha



  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (3ms)

$ 


npm checks the package.json file and knows to run mocha when asked to "test"

# Elements of a typical mocha test

Bring in the assert library to make an assert. assert has over a hundred options to check for in this case "equal"

describe is your description of what the test is about 
it( begins the actual test. In this case, an array [1,2,3] with a check for the number 4. 

There is no four so expect to see a -1 returned.

# assert 
Assert will have two or three arguments. The first argument is item to be tested. The first item will return a value, in this case,
-1. The second argument must match that value, in this case a -1 to pass. The third argument is optional and will print
out a helpful message if the test fails.  

# running the same code in Node.js
$ node
Welcome to Node.js v15.4.0.
 > const ar = [1,2,3]

 > ar.indexOf(4)

-1
 > 


This is a very simply test. That's the point of mocha and most other testing tools. Test very small parts of the code at a time. 
Make up for it with large numbers of individual tests. 


> mocha

  Arithmetic
    ✓ should test if 6 + 7  = 13
    ✓ should test if 6*7 = 42

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  3 passing (3ms)

