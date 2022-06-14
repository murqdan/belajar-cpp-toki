function palindrome([...str]) {
  const sampah = [];
  let loopStr = " ";
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === " " ||
      str[i] === "," ||
      str[i] === "." ||
      str[i] === "_" ||
      str[i] === "-" ||
      str[i] === "/" ||
      str[i] === "(" ||
      str[i] === ")"
    ) {
      sampah.push(str[i]);
    } else {
      loopStr += str[i];
    }
  }

  const fixStr = loopStr.toLowerCase();
  const yeahStr = [...fixStr];
  const firstElementSampah = yeahStr.shift();

  console.log("0" === "0");
  for (let i = 0; i < yeahStr.length; i++) {
    if (yeahStr[i] === yeahStr[yeahStr.length - (i + 1)]) {
      result.push(true);
    } else {
      return false;
    }
  }

  return result[0];
}

console.log(palindrome("0_0 (: /- :) 0-0"));
