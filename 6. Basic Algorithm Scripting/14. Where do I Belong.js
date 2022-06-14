// function getIndexToIns(arr, num) {
//   // Masukkan num ke arr
//   arr.push(num);

//   // Urutkan arr (ASC)
//   arr.sort((a, b) => a - b);

//   // Looping arr dan cek apakah arr[i] == num
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       // Jika benar, return index keberapa dari arr[i]
//       return i;
//     }
//   }
// }

// console.log(getIndexToIns([2, 20, 10], 19));

const getIndexToIns = (arr, num) => arr.filter(val => num > val).length;

console.log(getIndexToIns([2, 20, 10], 19));