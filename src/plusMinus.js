export function plusMinus(arr) {
  // Write your code here
  let sumPlus = 0;
  let sumMin = 0;
  let sumZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumPlus += 1;
    } else if (arr[i] == 0) {
      sumZero += 1;
    } else {
      sumMin += 1;
    }
  }

  let result = [
    sumPlus / arr.length,
    sumMin / arr.length,
    sumZero / arr.length,
  ];

  return {
    result1: result[0],
    result2: result[1],
    result3: result[2],
  }
}
