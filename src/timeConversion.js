function timeConversion(s) {
  let arrConvert = [];
  let result = '';

  if (s[s.length - 2] == 'P' && s[0] == '1' && s[1] == '2') {
    for (let i = 0; i <= s.length - 3; i++) {
      result += s[i];
    }
  } else if (s[1] < 8) {
    for (let i = 0; i <= s.length - 3; i++) {
      arrConvert.push(s[i]);
    }

    arrConvert[0] = '1';
    arrConvert[1] = parseInt(arrConvert[1]) + 2;
    arrConvert[1] = arrConvert[1].toString();

    for (let i = 0; i < arrConvert.length; i++) {
      result += arrConvert[i];
    }
  } else if (s[1] < 10) {
    
  }

  return result;
}

console.log(timeConversion('07:59:00PM'));
