const m1 = new Map()
const a = { name: 'c' }

m1.set(a, 1)
// console.log('m1', m1.get(a))

const m2 = new Map([
  ['name', 'cc'],
  ['age', 3]
])
// console.log('m2', m2)

const m3 = new Map([
  ['name', 'cc'],
  ['age', 3]
])
// console.log('mapToObj()', mapToObj(m3))
function mapToObj (map) {
  const obj = {}
  for ([key, value] of map) {
    obj[key] = value
  }
  return obj
}


const obj1 = {
  'name': 'cc',
  'age': 3
}
const m4 = Object.entries(obj1)
// console.log('m4', m4)
console.log(objToMap(obj1))
function objToMap (obj) {
  const map = new Map()
  for (i in obj) {
    map.set(i, obj[i])
  }
  return map
}