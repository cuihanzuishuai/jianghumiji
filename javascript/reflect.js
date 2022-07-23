const obj1 = {
  name: null
}
Reflect.defineProperty(obj1, 'name', {
  value: 1
})

// console.log('in', 'name' in obj1)
// console.log('in', Reflect.has(obj1, 'name'))

// Reflect.set(obj1, 'age', 3)
// console.log('obj1', obj1)


const Obj1Proxy = new Proxy(obj1, {
  get (target, name) {
    return Reflect.get(target, name)
  },
  set (target, name, value) {
    return Reflect.set(target, name, value)
  },
  deleteProperty (target, name) {
    return Reflect.deleteProperty(target, name)
  },
  has (target, name) {
    return Reflect.has(target, name)
  }
})

Obj1Proxy.age = 33
console.log(delete Obj1Proxy.name)
console.log('Obj1Proxy', Obj1Proxy)
console.log('name' in Obj1Proxy)