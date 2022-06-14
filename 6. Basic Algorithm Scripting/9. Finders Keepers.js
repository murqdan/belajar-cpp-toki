// function findElement(arr, func) {
//   let num = undefined;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       if (arr[i] > num) {
//         return num;
//       } else {
//         num = arr[i];
//       }
//     }
//   }

//   return num;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

const findElement = (arr, func) => arr.find(func);

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
