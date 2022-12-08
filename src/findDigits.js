function findDigits(n) {
    // Write your code here
    const pembagi = n;
    let arr = [];
    let result = 0;
    
    while (n > 0) {
        arr.push(n % 10);
        n = (n / 10) | 0;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(pembagi % arr[i] == 0) {
            result += 1;
        }
    }

    return result;
}