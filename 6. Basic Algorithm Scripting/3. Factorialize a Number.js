// function factorialize(num) {
//   let result = 1;

//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorialize(0));

const factorialize = (num) => (num === 0 ? 1 : num * factorialize(num - 1));
console.log(factorialize(0));
