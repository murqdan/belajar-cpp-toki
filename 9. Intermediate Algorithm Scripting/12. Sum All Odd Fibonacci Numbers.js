function sumFibs(num) {
  const fib = [0, 1];
  const sum = [];

  for (let i = 2; i <= 35; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i]);
  }

  for (let i = 0; i < fib.length; i++) {
    if (fib[i] <= num && fib[i] % 2 == 1) {
      sum.push(fib[i]);
    }
  }

  return sum.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

console.log(sumFibs(10));
