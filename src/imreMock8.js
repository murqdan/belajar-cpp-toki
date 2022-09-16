/* export function dzuizzImreInterview(n) {
  for (let i = 0; i < n; i++) {
    if (i % 5 == 1 || i % 5 == 4) {
      console.log('*');
    } else {
      console.log(i + 1);
    }
  }
} */

export function dzuizzImreInterview(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    let toThePowerOf = arr.length - (i + 1);

    if (toThePowerOf > 0) {
      result += arr[i] * 10 ** toThePowerOf;
    } else {
      result += arr[i];
    }
  }

  return result;
}
