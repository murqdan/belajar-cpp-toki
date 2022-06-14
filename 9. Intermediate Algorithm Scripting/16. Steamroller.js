function steamrollArray(arr) {
  const newArray = [];

  const flatten = (arr) =>
    arr.forEach((el) => (!Array.isArray(el) ? newArray.push(el) : flatten(el)));
  flatten(arr);

  return newArray;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
