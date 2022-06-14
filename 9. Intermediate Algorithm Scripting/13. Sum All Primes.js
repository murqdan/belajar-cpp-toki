function sumPrimes(num) {
  const primes = [2, 3];
  const sum = [];

  for (let i = 5; i <= 977; i += 2) {
    if (
      primes.every(function (p) {
        return i % p;
      })
    ) {
      primes.push(i);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] <= num) {
      sum.push(primes[i]);
    }
  }

  return sum.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumPrimes(977));
