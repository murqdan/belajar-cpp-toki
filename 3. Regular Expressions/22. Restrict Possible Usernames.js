let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+[0-9]*$|^[a-zA-Z][\d][\d]+$/; // Change this line
let result = userCheck.test(username);

console.log(result);
