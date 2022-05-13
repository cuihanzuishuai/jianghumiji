// 数据去重
var arr = [1, 2, 4, 1, 'a', '1', 7, 4, 3, 2]

// 1
function remove1 (arr) {
  const map = new Map()
  return arr.filter((item) => {
    return !map.has(item) && map.set(item, 1)
  })
}

// 2
function remove2 (arr) {
  const ret = []
  for (var i = 0, j = arr.length; i < j; i++) {
    if (ret.indexOf(arr[i]) === -1) {
      ret.push(arr[i])
    }
  }
  return ret
}

// 3
function remove3 (arr) {
  const obj = {}
  const result = []
  arr.forEach(item => {
    if (!obj[item]) {
      result.push(item)
      obj[item] = 1
    }
  })
  return result
}

console.log('remove3', remove3(arr))

// 4
const newArr = [...new Set([1, 2, 4, 1, 'a', '1', 7, 4, 3, 2])]
