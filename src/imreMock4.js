/* export function reverseNum(num) {
  let arr = [];
  let newNum = 0;

  while (num > 0) {
    //1234 > 0
    arr.push(num % 10);
    //arr.unshift(1234 % 10)
    //arr.unshift(4)
    num = (num / 10) | 0;
    //num = (1234 / 10) | 0
    //num = 123.4 | 0)
    //num = 123
  }

  while (num < 0) {
    //1234 > 0
    arr.push(num % -10);
    //arr.unshift(1234 % 10)
    //arr.unshift(4)
    num = (num / 10) | 0;
    //num = (1234 / 10) | 0
    //num = 123.4 | 0)
    //num = 123
  }

  for (let i = 0; i < arr.length; i++) {
    let toThePowerOf = arr.length - (i + 1);

    if (toThePowerOf > 0) {
      newNum += arr[i] * 10 ** toThePowerOf;
    } else {
      newNum += arr[i];
    }
  }

  return newNum;
} */

/* export function reverseNum(num) {
  let result = 0;

  while (num != 0) {
    result += (num % 10) * 10 ** Math.floor(Math.log10(Math.abs(num)));
    num = (num / 10) | 0;
  }

  return result;
} */

export function reverseNum(num) {
  if (num < 0) return -reverseNum(-num);

  let result = 0;

  while (num > 0) {
    let a = num % 10;
    num = Math.floor(num / 10);

    result = result * 10 + a;
  }

  return result;
}
