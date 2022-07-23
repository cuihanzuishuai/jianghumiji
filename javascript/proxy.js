const proxy1 = new Proxy({}, {
  get: function (target, propKey) {
    console.log('target, propKey', target, propKey)
    return 35
  }
})
// console.log('proxy1', proxy1.time)


var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype
    }
    return 'Hello, ' + name
  },
  apply: function (target, thisBinding, args) {
    return args[0]
  },
  construct: function (target, args) {
    return { value: args[1] }
  }
}
var fproxy = new Proxy(function (x, y) {
  return x + y
}, handler)
// console.log('fproxy(1, 2)', fproxy(1, 2))



const vld = {
  set: function (target, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer')
      }
      if (value > 100) {
        throw new RangeError('The age seems invalid')
      }
      target[prop] = value
      return true
    }
  }
}
const proxy2 = new Proxy({}, vld)
proxy2.age = 1
// console.log('proxy2.age', proxy2.age)