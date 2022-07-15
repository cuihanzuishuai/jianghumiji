class Person {
  // constructor() {
  //   this.getName = () => {
  //     console.log('cuihan')
  //   }
  // }
  getName () {
    console.log('cc')
  }
  getAge () {
    console.log('12')
  }
  static getName () {
    console.log('ch')
  }
}

let p = new Person()

// p.getName()
// Person.prototype.getName()
// Person.getName()
// p.getAge()

// console.log(Person.prototype.getName())

class Car {
  constructor(name) {
    this.name = name
  }
}

class CloneCar extends Car {
  constructor(name) {
    // super(name)
    return {}
  }
}

console.log(new CloneCar('123'))
