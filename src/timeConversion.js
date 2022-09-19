function timeConversion(s) {
  let arrConvert = [];
  let result = '';

  if (s[s.length - 2] == 'A' && s[0] == '1' && s[1] == '2') {
    for (let i = 0; i <= s.length - 3; i++) {
      arrConvert.push(s[i]);
    }
    arrConvert[0] = '0';
    arrConvert[1] = '0';
    
    for (let i = 0; i < arrConvert.length; i++) {
      result += arrConvert[i];
    }
  } else if (s[s.length - 2] == 'A') {
    for (let i = 0; i <= s.length - 3; i++) {
      result += s[i];
    }
  } else if (s[s.length - 2] == 'P' && s[0] == '1' && s[1] == '2') {
    for (let i = 0; i <= s.length - 3; i++) {
      result += s[i];
    }
  } else if (s[s.length - 2] == 'P' &&  s[0] == '1'|| s[1] == '8' || s[1] == '9') {
    for (let i = 0; i <= s.length - 3; i++) {
      arrConvert.push(s[i]);
    }
    
    let mergefirsttwonumbers = arrConvert[0] + arrConvert[1];
    arrConvert[1] = (parseInt(mergefirsttwonumbers) + 12) % 4;
    arrConvert[1] = arrConvert[1].toString();
    arrConvert[0] = '2'

    for (let i = 0; i < arrConvert.length; i++) {
      result += arrConvert[i];
    }
  } else if (s[s.length - 2] == 'P' && s[1] < 8) {
    for (let i = 0; i <= s.length - 3; i++) {
      arrConvert.push(s[i]);
    }

    arrConvert[0] = '1';
    arrConvert[1] = parseInt(arrConvert[1]) + 2;
    arrConvert[1] = arrConvert[1].toString();

    for (let i = 0; i < arrConvert.length; i++) {
      result += arrConvert[i];
    }
  } 

  return result;
}

console.log(timeConversion('12:59:00PM'));
console.log(timeConversion('11:59:00PM'));
console.log(timeConversion('12:59:00AM'));
console.log(timeConversion('11:59:00AM'));
