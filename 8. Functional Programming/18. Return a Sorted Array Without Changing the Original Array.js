// let globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//   let newArr = [];

//   return newArr.concat(arr).sort(function (a, b) {
//     return a !== b ? (a < b ? -1 : 1) : 0;
//   });
//   // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray));

let globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return [...arr].sort((a, b) => a - b);
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
