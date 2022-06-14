function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nyam nyam nyam");
  },
  greeting() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

function Dog(name) {
  this.name = name;
}

function Bird(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);

let beagle = new Dog("Heli");
let cendrawasih = new Bird("Censih");

console.log(beagle.name);
beagle.eat();
beagle.greeting();

console.log(cendrawasih.name);
cendrawasih.eat();
cendrawasih.greeting();
