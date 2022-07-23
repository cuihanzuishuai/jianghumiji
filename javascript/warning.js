// 获取字符串中的字符数
function getCharNum (str, char) {
  return str.split(char).length - 1
}
const str1 = '123qweasdzxc2!!!321654edc'
// console.log(getCharNum(str1, '2'))


//检查对象是否为空
function emptyObj (obj) {
  return Reflect.ownKeys(obj).length === 0
  // return Object.keys(obj).length === 0
}
const obj1 = {}
// console.log(emptyObj(obj1))


// 等待一段时间再执行
function console1 () {
  console.log('执行')
}
const promise1 = (delay, func) => {
  return new Promise((revolve, reject) => {
    setTimeout(() => {
      revolve()
    }, delay)
  }).then(() => {
    func()
  })
}
// promise1(1100, console1)


// 获取两个日期之间的日差
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))


// 检查设备上的触摸支持
const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)

