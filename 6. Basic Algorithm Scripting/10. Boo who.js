// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(booWho(true));

const booWho = (bool) => typeof bool === "boolean";

console.log(booWho(false));
