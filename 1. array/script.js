let fruit = ['python', 'java', 'javascript', 'c++', 'ruby'];

/* 4 cara penggunaan struktur data :
read, search, create/insert, delete. */

// read
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);

// search
// for (let i = 0; i < fruit.length; i++) {
//   if (fruit[i] == "javascript") {
//     console.log(`${fruit[i]} (${i + 1} langkah)`);
//   }
// }

// create/insert
// fruit.push("php");
// console.log(fruit);
fruit.splice(3, 0, "php");
console.log(fruit);

// delete
fruit.splice(1, 1);
console.log(fruit);
