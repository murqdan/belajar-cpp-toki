/* function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, after);
  } else {
    return str.replace(before, after.toLowerCase());
  }
} */

const myReplace = (str, before, after) =>
  str.replace(
    before,
    /^[A-Z]/.test(before)
      ? after[0].toUpperCase() + after.slice(1)
      : after.toLowerCase()
  );

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
