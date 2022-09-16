/* export function imreMockSatu(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [arr[i], arr[j]];
      }
    }
  }
} */

export function imreMockSatu(arr, target) {
  const indices = {};

  arr.forEach((item, index) => {
    indices[item] = index;
  });

  for (let index = 0; index < arr.length; index++) {
    const complement = target - arr[index];

    if (indices[complement] !== undefined && indices[complement] !== index) {
      return [index, indices[complement]];
    }
  }
}

/* export function imreMockSatu(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 2 || i % 5 == 0) {
      console.log('*');
    } else {
      console.log(i);
    }
  }
} */
