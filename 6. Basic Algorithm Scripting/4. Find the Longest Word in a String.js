// function findLongestWordLength(str) {
//   let maxWord = "";

//   let strArr = str.split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].length > maxWord.length) {
//       maxWord = strArr[i];
//     }
//   }

//   return maxWord.length;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

const findLongestWordLength = (str) =>
  Math.max(...str.split(" ").map((kata) => kata.length));

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
