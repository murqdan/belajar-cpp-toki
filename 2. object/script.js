let fruit = {
  name: "grape",
  description: "popular and famous fruit",
  colors: ["purple", "green"],
  isSmall: true,
  order: 1,
  owner: "me",
};

// read
// console.log(fruit["isSmall"]);
// console.log(fruit.name);
// console.log(fruit.owner || "Adnan");

// search
let keys = Object.keys(fruit);
console.log(keys);
let values = Object.values(fruit);
console.log(values);
let entries = Object.entries(fruit);
console.log(entries);

// create/insert
/* Object.defineProperties;
Object.defineProperty; */
// fruit.price = 20000;
// console.log(fruit);

// delete
// delete fruit.price;
// console.log(fruit);
