const chai = require('chai')
const assert = chai.assert

const name = 'James'
let age = 31
let isCool = true
const object = {
  class: 'Sei-111'
}

const array = [1, 'h2llo']

function add(num1, num2) {
  return num1 + num2
}

module.exports = {
  name,
  age,
  isCool,
  object,
  array,
  add
}


