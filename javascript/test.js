var a = 1;
var b = {
  fn: () => {
    console.log(this.a);
  },
  a: 2
};
var c = {
  a: 3
};
c.fn = b.fn;
c.fn();