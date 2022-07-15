// 基本类型
import { type } from 'os';
let str1: string = 'cc'
let num1: number = 3
let bool1: boolean = true
let un1: undefined = undefined
let nu1: null = null
let big1: bigint = 1234567890987654321n
let sym1: symbol = Symbol()

// 引用类型
let arr1: Array<number> = [1, 2, 3]
let arr2: number[] = [2, 3, 4]
let tu1: [number, string] = [1, '2']
let obj1: { a: number, b: string } = { a: 1, b: '2' }
let obj2: Object = 1 // 大写Object类型，除了undefined和null都可以赋值
function fun1 (name: string): string {
  return name
}
let fun2 = (name: string): string => {
  return name
}
let fun3 = (name: string, age?: number) => {
  console.log(name)
}
let fun4 = (name: string, age: number = 3) => {
  console.log(name, age)
}
let fun5 = (...num: number[]) => {
  console.log(num)
}

let obj3: any = {}
function setInfo (val: string): void
function setInfo (val: number): void
function setInfo (val: boolean): void
function setInfo (val: string | number | boolean) {
  if (typeof val === "string") {
    obj3.name = val;
  } else {
    obj3.age = val;
  }
}
setInfo('cc')
setInfo(3)
setInfo(false)

// 特殊类型
let unknown1: unknown
// let strUnknown: string = unknown1 // error
let error1 = (): never => {
  throw Error('error')
}
enum Enum1 {
  A,
  B,
  C,
  D
}

// 类型推论
let a = 'cc'
a = '3'

// 交叉类型
type Aprops1 = {
  a: string
}
type Bprops2 = {
  b: number
}
type Allprops1 = Aprops1 & Bprops2
let obj4: Allprops1 = {
  a: 'c',
  b: 1
}

interface Ainter {
  a: string
}
interface Binter {
  b: number
}
type Allprops2 = Ainter & Binter

// class
class Info1 {
  static name1: string = 'c'
  name2: string = 'cc'
  name3!: string
  constructor(_name: string) {
    this.name2 = _name
  }
  get name4 () {
    return this.name2
  }
  set name5 (_name: string) {
    this.name3 = _name
  }
}
let info1 = new Info1('ch')
info1.name5 = 'cuihan'

class Person1 {
  name: string
  constructor(_name: string) {
    this.name = _name
  }
  getName () {
    return `my name is ${this.name}`
  }
}
class Child1 extends Person1 {
  constructor(_name: string) {
    super(_name)
  }
}

let child1 = new Child1('cc')

// 类型断言
let str2: any = 'cc'
let strLength1: number = (str2 as string).length
const fun6 = (name: string | undefined | null) => {
  const str: string = name!
}
fun6('cc')

let num2: number = 123
let num3!: number

// 类型守卫
interface info2 {
  name: string,
  age: number
}
interface info3 {
  name: string,
  flage: boolean
}
const setInfo1 = (data: info2 | info3) => {
  if ('age' in data) {
    console.log(1)
  } else if ('flage' in data) {
    console.log(2)
  }
}
function isNumber1 (n: number): n is number {
  return typeof n === 'number'
}

// interface
interface Props1 {
  a: string;
  [c: string]: string;
}
let props1: Props1 = {
  a: 'a',
  d: 'd'
}
console.log('props1', props1)