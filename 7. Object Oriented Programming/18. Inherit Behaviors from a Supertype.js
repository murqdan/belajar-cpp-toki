function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
