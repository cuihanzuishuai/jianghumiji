const obj1 = {
  name: 'cc'
}
// Object.defineProperty(obj1, 'name', {
//   // writable: false,
//   value: 'ch'
// })

// // Object.defineProperty(obj1, 'name', {
// //   configurable: false
// // })

// delete obj1.name
// console.log('obj1', obj1)

// const obj2 = {}
// Object.defineProperties(obj2, {
//   a_: {
//     value: 1
//   },
//   b_: {
//     value: 2
//   },
//   a: {
//     get () {
//       return this.a_
//     },
//     set (val) {
//       this.a_ = val
//     }
//   },
//   b: {
//     value: 2
//   }
// })
// // console.log('obj2', obj2.a)

// const desc = Object.getOwnPropertyDescriptor(obj2, 'a_')
// // console.log('desc', desc)

// let obj3 = {}
// obj3 = Object.assign({}, { a: 1 }, { b: 2 })
// // console.log('obj3', obj3)

// dest = {
//   get b () {
//     // console.log(1)
//     return 1
//   }
// }

// src = {
//   set a (val) {
//     // console.log('val', val)
//   }
// }

// Object.assign(src, dest)


// function fun (x, ...rest) {
//   return Object.is(x, rest[0]) && (rest.length < 2 || fun(...rest))
// }
// console.log(fun(0, ...['a', 2, 3]))

// let aa
// let bb
// let obj4 = { a: 1, b: 2 }
//   ({ a: aa, b: bb } = obj4)

// console.log(aa)
// console.log(bb)

// let person = {
//   name: 'c',
//   age: 3
// }

// let { name: personCopy.name, age: personCopy.age } = person


// console.log(personCopy)

const obj5 = {
  f () {
    this.foo = 'bar'
  }
}

const obj6 = { a: 1, b: 2 }
// console.log('obj6', obj6.toString())


// 遍历
for (i in obj6) {
  // console.log('i', i)
}
// console.log('Object.keys()', Object.keys(obj6))
// console.log('Object.getOwnPropertyNames()', Object.getOwnPropertyNames(obj6))
// console.log('Reflect.ownKeys()', Reflect.ownKeys(obj6))

const o = Object.create({ x: 1, y: 2 })
o.z = 3
// console.log('o', o)

let { x, ...newObj } = o
// console.log('x', x)
// console.log('newObj', newObj)
let { y, z } = newObj




class C {
  p = 12;
  m () { }
}

let c = new C()
let clone = { ...c }

// clone.p // 12
// clone.m() // 报错


const obj7 = { a: 1, b: 2 }
const obj8 = Object.assign({}, obj7)
const obj9 = { ...obj7 }
obj7.a = 3
// console.log('obj8', obj8)
// console.log('obj9', obj9)


// console.log('Object.is()', Object.is(1, '1'))

const entries1 = new Map([
  ['a', 1],
  ['b', 2]
])
entries2 = Object.fromEntries(entries1)
// console.log('entries2', entries2)


const obj10 = { a: 1, b: 2 }
console.log('obj10.hasOwnProperty()', obj10.hasOwnProperty('c'))
console.log('Object.hasOwn()', Object.hasOwn(obj10, 'a'))
