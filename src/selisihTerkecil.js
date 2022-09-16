export function selisihTerkecil(arr1, arr2) {
  let selisih = Math.abs(arr1[0] - arr2[0]) + 1;
  let hasil = [0, 0];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] - arr2[j] < 0) {
        if (arr1[i] - arr2[j] + (arr1[i] - arr2[j]) * -2 < selisih) {
          selisih = arr1[i] - arr2[j] + (arr1[i] - arr2[j]) * -2;
          hasil[0] = arr1[i];
          hasil[1] = arr2[j];
        }
      } else {
        if (arr1[i] - arr2[j] < selisih) {
          selisih = arr1[i] - arr2[j];
          hasil[0] = arr1[i];
          hasil[1] = arr2[j];
        }
      }
    }
  }

  return hasil;
}
