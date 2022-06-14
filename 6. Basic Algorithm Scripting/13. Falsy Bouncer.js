// function bouncer(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

const bouncer = (arr) => arr.filter((e) => e);

console.log(bouncer([7, "ate", "", false, 9]));
