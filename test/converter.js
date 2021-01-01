const toswahili = require('./../src/index');

/** Test Parameters */
const result1 = toswahili(44); 
const result2 = toswahili(110000);

/** Expected Output */
var expect = require('chai').expect
  , test1 = 'arobaini na nne', // Test1 should be same as result2
    test2 = 'laki moja na elfu kumi' // Test2 should be same as result2

/** Base Test */
expect(test1).to.be.a('string'); // Check expected output to be a string
expect(test1).to.equal(result1); // Check expected output to be equal to result1
expect(test2).to.equal(result2); // Check expected output to be equal to result2
