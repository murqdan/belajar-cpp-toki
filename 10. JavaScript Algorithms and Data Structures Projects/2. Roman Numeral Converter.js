function convertToRoman(num) {
/* 
  let newArr = [];
  let text = num.toString();
  let arr = [...text];

  if (arr.length == 2) {
    newArr.push(arr[0] + "0");
    newArr.push(arr[1]);
  } else if (arr.length == 3) {
    newArr.push(arr[0] + "00");
    newArr.push(arr[1] + "0");
    newArr.push(arr[2]);
  } else if (arr.length == 4) {
    newArr.push(arr[0] + "000");
    newArr.push(arr[1] + "00");
    newArr.push(arr[2] + "0");
    newArr.push(arr[3]);
  } else {
    newArr.push(arr[0]);
  }

  for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] == '10') {
        if(newArr[i+(newArr.length-1)] == '5') {
            return 'XV'
        } 
      }
  } */

 
  if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;



}
console.log(convertToRoman(6));
