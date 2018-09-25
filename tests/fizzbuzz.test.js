const chai = require('chai');

const fizzbuzz = require('../problems/fizzbuzz.js');
const expect = chai.expect;
describe('Fizzbuzz() test problem', function(){
  it('should be a Fizzbuzz instead of 15/30/45', function(){
    const result = fizzbuzz(0, 100)
    expect(result[3]).to.eql('fizz')
    expect(result[10]).to.eql('buzz')
    expect(result[15]).to.eql('fizzbuzz')
    expect(result[11]).to.eql(11)
  })
})
