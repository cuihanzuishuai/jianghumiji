// 交叉类型
type a = {
  name: string
}

type b = {
  age: number
}

type ab = a & b

const abValue: ab = {
  name: 'c',
  age: 3
}
// console.log('abValue', abValue)

interface A {
  name: string
}
interface B {
  age: number
}
interface C {
  x: A
}
interface D {
  x: B
}
type infoType = C & D
const info: infoType = {
  x: {
    name: 'c',
    age: 1
  }
}
// console.log('info', info)


class MyClass {
  static name1: string = 'c'
  name2: string = 'c1'
  // name2: string
  name3!: string
  name4: string = 'cc'

  constructor(name: string) {
    this.name3 = name
  }

  static getName = () => {
    return 'getName'
  }

  getName2 = () => {
    return 'getName2'
  }

  get name5 () {
    return this.name4
  }

  set name5 (name: string) {
    this.name4 = name
  }
}

const myClass = new MyClass('cc')
// console.log('myClass', myClass.getName2())
// console.log('name1', MyClass.name1)
// console.log('name1', myClass.name5)
myClass.name5 = 'ccc'
// console.log('name1', myClass.name5)

// 类型断言
const str1: any = 'cc'
const strNum1: number = (str1 as string).length
// console.log('strNum1', strNum1)

let num!: number
const setNumber = () => num = 7
setNumber()
// console.log('num', num)

// 类型守卫
interface Info1 {
  name: string
  age: number
}
interface Info2 {
  name: string
  native: string
}

function infoFun (data: Info1 | Info2) {
  if ('age' in data) {
    return `${data.name}, ${data.age}`
  }
  if ('native' in data) {
    return `${data.name}, ${data.native}`
  }
}
// console.log('infoFun', infoFun({ name: 'cc', age: 3 }))

// 接口
interface Inter1 {
  [a: string]: any
}

const str2: Inter1 = {
  b: 1
}
// console.log('str2', str2)

interface Props {
  (data: number): number
}
const Fun1: Props = (data: number) => data

// console.log('Fun1', Fun1(1))

interface PropsClass {
  new(data: string): A
}

class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const info1 = (fun: PropsClass, name: string) => new fun(name)
// console.log('info1', info1(A, 'cc'))


// 扩展
interface AA {
  name: string
}
interface BB extends AA {
  age: number
}

type TypeA = {
  name: string
}
type TypeB = TypeA & {
  age: number
}

type TypeC = AA & { age: number }

interface CC extends TypeA {
  age: number
}
const bb: CC = { name: 'cc', age: 12 }
// console.log('bb', bb)

// 范型
function calcArr<T> (data: T): T[] {
  let list: T[] = []
  for (let i = 0; i < 3; i++) {
    list.push(data)
  }
  return list
}

const calcArr2 = <T> (data: T): T[] => {
  let list: T[] = []
  for (let i = 0; i < 3; i++) {
    list.push(data)
  }
  return list
}

// console.log('calcArr', calcArr2('1'))

interface InterT<T> {
  name: T
}
const interT: InterT<string> = { name: '1' }
// console.log('interT', interT)


// extends
interface Length {
  length: number
}
function csLength<T extends Length> (data: T): number {
  return data.length
}

// console.log(csLength('123'))

// interface
interface Props1 {
  (data: number): number
}
const funProps1: Props1 = (data: number) => {
  return data
}
// console.log('funProps1', funProps1(1))

// in
type name6 = 'name' | 'age' | 'sex'
type name7 = {
  [type in name6]: number
}
