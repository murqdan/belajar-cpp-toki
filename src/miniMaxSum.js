export function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  // return {
  //   min: result - arr[arr.length - 1],
  //   max: result - arr[0],
  // };

  return [result - arr[arr.length - 1], result - arr[0]];
}