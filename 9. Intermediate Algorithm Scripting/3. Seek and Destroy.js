/* function destroyer(...arr) {
  const [main, ...acc] = arr;
  const filter = main.filter((el) => !acc.includes(el));
  
  return filter;
} */

const destroyer = (main, ...acc) => main.filter((el) => !acc.includes(el));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
