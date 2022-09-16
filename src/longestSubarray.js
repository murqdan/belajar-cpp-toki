function f(A) {
  if (A.length < 2) return A.length;

  let best = 1;
  let bestLower = 1;
  let bestHigher = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1]) {
      bestLower = bestLower + 1;
      bestHigher = bestHigher + 1;
    } else if (A[i] - 1 == A[i - 1]) {
      bestLower = 1 + bestHigher;
      bestHigher = 1;
    } else if (A[i] + 1 == A[i - 1]) {
      bestHigher = 1 + bestLower;
      bestLower = 1;
    } else {
      bestLower = 1;
      bestHigher = 1;
    }

    best = Math.max(best, bestLower, bestHigher);
  }

  return best;
}

let arrays = [
  [0, 1, 2, 1, 2, 3], // length = 4; [1,2,1,2]
  [1, 2, 3, 4, 5], // length = 2; [1,2]
  [1, 1, 1, 3, 3, 2, 2], // length = 4; [3,3,2,2]
  [3, 3, 3, 3],
];

for (let arr of arrays) {
  console.log(JSON.stringify(arr));
  console.log(f(arr));
}
