let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs() {
    return `This dog has ${this.numLegs} legs.`;
  },
  // sayLegs: () => `This dog has ${dog.numLegs} legs.`,
};

console.log(dog.sayLegs());

/* 
// ini gak ada hubungannya
let abjad = "abcdefghijklmnopqrstuvwxyz";

function lettersum(input) {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    result += abjad.indexOf(input[i]) + 1;
  }

  return result;
}

console.log(lettersum("skyshidevtalk"));
 */
