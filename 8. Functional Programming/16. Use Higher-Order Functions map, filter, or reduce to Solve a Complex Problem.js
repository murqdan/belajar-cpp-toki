const squareList = (arr) => {
  // Only change code below this line
  let result = arr.filter((e) => e > 0 && e % 1 === 0).map((e) => e * e);

  return result;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);
