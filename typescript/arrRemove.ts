// 数据去重
var arr: Array<number | string> = [1, 2, 4, 1, 'a', '1', 7, 4, 3, 2]

// 1
function remove1 (arr: Array<number | string>) {
  const map = new Map()
  return arr.filter((item: string | number) => {
    return !map.has(item) && map.set(item, 1)
  })
}

// 2
function remove2 (arr: Array<number | string>): Array<number | string> {
  const ret: Array<number | string> = []
  for (var i = 0, j = arr.length; i < j; i++) {
    if (ret.indexOf(arr[i]) === -1) {
      ret.push(arr[i])
    }
  }
  return ret
}

// 3


function remove3 (arr: Array<number | string>): Array<number | string> {
  interface OBJ {
    [key: string | number]: number;
  }
  const obj: OBJ = {}
  const result: Array<number | string> = []
  arr.forEach(item => {
    if (!obj[item]) {
      result.push(item)
      obj[item] = 1
    }
  })
  return result
}

console.log(remove3(arr))


// 4
const newArr = [...new Set([1, 2, 4, 1, 'a', '1', 7, 4, 3, 2])]


