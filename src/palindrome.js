export function palindrome(word, i = 0) {
  /* let newWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  if (word == newWord) {
    return true;
  } else {
    return false;
  } */

  /* for (let i = 0; i <= word.length / 2; i++) {
    let initialIndex = i;
    let finalIndex = word.length - (i + 1);

    if (word[initialIndex] != word[finalIndex]) {
      return false;
    } else {
      return true;
    }
  } */

  if (i < word.length / 2) {
    if (word[i] != word[word.length - (i + 1)]) {
      return false;
    } else {
      return palindrome(word, i + 1);
    }
  } else {
    return true;
  }
}
