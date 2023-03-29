class Student {
  constructor(private name: string, private age: number) {}

  sayHello() {
    return `
    Hello ! I'm ${this.name} 
    and i've ${this.age} year${this.age <= 1 ? '' : 's'} old
    `
  }
}

const baby = new Student('Baby', 1)
const jowell = new Student('Jowell', 24)
const lucas = new Student('Lucas', 28)

// console.log(baby.sayHello())
// console.log(jowell.sayHello())
// console.log(lucas.sayHello())

const car = {
  name: 'Mercedes C300',
  getName: function () {
    setTimeout(() => {
      console.log(this)
    }, 100)
  },
}

console.log(car.getName())
