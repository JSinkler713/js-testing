const chai = require('chai')
const assert = require('chai').assert

const { name, age, isCool, object, add, array } = require('./index.js')

describe('Test james variable', function() {
  it('should return a string as the type', function() {
    assert.typeOf(name, 'string')
  })

  it('should return James as a result', function() {
    assert.equal(name, 'James')
  })
  
  it('should have the correct length', function() {
    assert.lengthOf(name, name.length);
  })
})

describe('Test age variable', function() {
  it('should return a number as the type', function() {
    assert.typeOf(name, 'string')
  })

  it('should return 31 as a result', function() {
    assert.equal(name, 'James')
  })
  
  it('should be less than 40', function() {
    assert.isBelow(age, 40);
  })
})
