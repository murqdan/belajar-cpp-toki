function fearNotLetter(str) {
  const alfabet = "abcdefghijklmnopqrstuvwxyz";
  const stringExp = alfabet.substring(
    alfabet.indexOf(str[0]),
    alfabet.indexOf(str[0]) + str.length
  );

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] == stringExp[i])) {
      return stringExp[i];
    }
  }
}

console.log(fearNotLetter("stvwx"));
