// const obj1 = {
//   name: 'cc'
// }
// Object.defineProperty(obj1, 'name', {
//   // writable: false,
//   value: 'ch'
// })

// // Object.defineProperty(obj1, 'name', {
// //   configurable: false
// // })

// delete obj1.name
// // console.log('obj1', obj1)

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

let person = {
  name: 'c',
  age: 3
}

let { name: personCopy.name, age: personCopy.age } = person


console.log(personCopy)