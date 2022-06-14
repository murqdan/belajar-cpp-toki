const repeatStringNumTimes = (str, num) => {
  let result = [];

  for (let i = 1; i <= num; i++) {
    result.push(str);
  }

  return result.join("");
};

console.log(repeatStringNumTimes("abc", 3));
