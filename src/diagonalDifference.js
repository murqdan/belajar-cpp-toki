export function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < arr.length; i++) {
    primary += arr[i][i];
    secondary += arr[i][arr.length - 1 - i];
  }

  let result = primary - secondary;

  if (result < 0) {
    return result + result * -2;
  } else {
    return result;
  }
}
