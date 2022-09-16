export function staircase(n) {
  // Write your code here
  let result = '';

  for (let i = 1; i <= n; i++) {
    for (let j = n - i; j > 0; j--) {
      result += ' ';
    }

    for (let k = 0; k < i; k++) {
      result += '#';
    }

    result += '\n';
  }

  return result;
}

console.log(staircase(6));
