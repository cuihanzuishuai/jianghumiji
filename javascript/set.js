let set1 = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log('set1', set1.size)
// console.log('set1', ...set1)

const set2 = new Set('abbbc')
set2.delete('a')
// console.log('set2', [...set2])

let set3 = new Set(['red', 'green', 'blue'])
for (let item of set3) {
  // console.log(item)
}

let set4 = new Set([1, 2, 3, 4, 5])
let set5 = new Set([4, 5, 6, 7, 8])
let set6 = new Set([...set4].filter(i => !set5.has(i)))
console.log('set6', set6)


const ws1 = new WeakSet([[1, 2], [3, 4]])
// console.log('ws1', ws1)