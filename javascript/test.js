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
// c.fn()


function foo () {
  var id = 1
  setTimeout(() => {
    console.log('id:', this.id)
  }, 100)
}

var id = 21

foo()
// foo.call({ id: 42 })