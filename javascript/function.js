let arrayLike = Array.from({
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
})
console.log('arrayLike', arrayLike)

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike]
console.log('arr', arr)