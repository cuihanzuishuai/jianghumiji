var a = 1
var b = {
  a: 2,
  fn: () => {
    console.log(this.a)
  }
}
var c = {
  a: 3
}
c.fn = b.fn
c.fn()