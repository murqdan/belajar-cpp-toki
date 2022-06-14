let hello = "   Hello, World!  ";
let wsRegex = /\s*(.*)\s\s+/g; // Change this line
let result = hello.replace(wsRegex, "$1"); // Change this line

console.log(result);
