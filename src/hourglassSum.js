export function hourglassSum(arr) {
  // Write your code here
  let hGlassSum = 0;
  let result = [-99];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      hGlassSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +

        arr[i + 1][j + 1] +

        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (hGlassSum > result[0]) {
        result[0] = hGlassSum;
      }
    }
  }

  return result[0];
}