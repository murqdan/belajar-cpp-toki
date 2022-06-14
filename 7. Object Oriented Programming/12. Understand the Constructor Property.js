function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

const cihuahua = new Dog("Heli");

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(cihuahua));
