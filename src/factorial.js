export function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

export function factorialRecursive(n) {
  if (n < 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function factorialTailRecursive(n, total = 1) {
  if (n < 1) {
    return total;
  } else {
    return factorialTailRecursive(n - 1, n * total);
    // factorialTailRecursive(3,4)
    // factorialTailRecursive(2,12)
    // factorialTailRecursive(1,24)
    // factorialTailRecursive(0,24)
  }
}
