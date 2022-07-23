const arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

// console.log('arrayLike', Array.from(arrayLike))

const arr1 = [1, 2, 3]
const arr2 = Array.from([1, 2, 3], x => x + 1)
// console.log('arr2', arr2)

const arr3 = Array.of(3, 4)
// console.log('arr3', arr3)

const arr7 = Array.from({ length: 4 }).fill('a')
// console.log('arr7', arr7)

const arr4 = [1, 2, 3]
arr4.fill('a', 1, 2)
// console.log('arr4', arr4)

const arr5 = ['a', 'b', 'c']
for (let item of arr5.entries()) {
  // console.log(item)
}

const arr6 = [1, [2, [3]]]
// console.log('arr6', arr6.flat(Infinity))


// console.log(Array(3).fill(3))


// console.log(4 in [4, 1, 2])

const fruits = ["Banana", "Orange", "Apple", "Mango"]
const energy = fruits.toString()
// var energy = fruits.join()
// console.log('energy', energy)



for (i of [1, 2, 3, 4, 5].keys()) {
  console.log(i)
}


console.log(...[1, 2, 3, 4, 5].keys())

// 遍历对象：for...in可以，for...of 不可以
// 遍历Map Set: for..of 可以，for..in 不可以
// 遍历 generator：for...of 可以，for...in 不可以

// ### for...in
// 可以用在可枚举的数据，如：
// 对象
// 数组
// 字符串

// ### for...of
// 用于可迭代的数据，如：
// 数组
// 字符串
// Map
// Set

// for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

