const toswahili = require('./../src/index');

/** Test Demo */
const result1 = toswahili(44);
const result2 = toswahili(110000);


var expect = require('chai').expect
  , test1 = 'arobaini na nne',
    test2 = 'laki moja na elfu kumi'


expect(test1).to.be.a('string');
expect(test1).to.equal(result1);
expect(test2).to.equal(result2);
