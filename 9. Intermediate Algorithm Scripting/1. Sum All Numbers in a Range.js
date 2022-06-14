function sumAll(arr) {
  let result = 0;

  if (arr[0] < arr[1]) {
    for (arr[0]; arr[0] <= arr[1]; arr[0]++) {
      result += arr[0];
    }
  } else {
    for (arr[0]; arr[0] >= arr[1]; arr[0]--) {
      result += arr[0];
    }
  }

  return result;
}

console.log(sumAll([1, 4]));
