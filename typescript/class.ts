class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  add (p: Point)  {
    return new Point(p.x + this.x, p.y + this.y)
  }
}

const p = new Point(0,0)
const newP = p.add(new Point(1,1))
// console.log('newP', newP)



interface Movable {
  move(): void
}
class Dog implements Movable {
  move () {
    console.log('move dog')
  }
}
const dog = new Dog()
dog.move()