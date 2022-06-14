const translatePigLatin = (str) =>
  str.match(/^[aiueo]/)
    ? str + "way"
    : str.replace(/([^aiueo]+)(\w*)/, "$2$1ay");

translatePigLatin("consonant");
