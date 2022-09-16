function isAbbreviation(source, abbr) {
  let sourceWordOne = [];
  let sourceWordTwo = [];
  let result = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== ' ') {
      sourceWordOne.push(source[i]);
    } else {
      i = source.length;
    }
  }

  for (let j = source.length - 1; j > 0; j--) {
    if (source[j] !== ' ' && !sourceWordOne.includes(source[j])) {
      sourceWordTwo.unshift(source[j]);
    }
  }

  for (let k = 0; k < abbr.length; k++) {
    if (sourceWordOne.includes(abbr[k])) {
      result.push(true);
      k = abbr.length;
    }
  }

  for (let l = 0; l < abbr.length; l++) {
    if (sourceWordTwo.includes(abbr[l])) {
      result.push(true);
      l = abbr.length;
    }
  }

  if (result.length < 2) {
    console.log(false);
  } else {
    console.log(true);
  }
}
// isAbbreviation('British Exit', 'Brexit');
isAbbreviation('European Currency', 'Euro');
