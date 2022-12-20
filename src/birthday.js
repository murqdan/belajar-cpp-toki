function birthday(s, d, m) {
    // Write your code here
    let result = 0;
    // result = 0
    let penambah = 0;
    // penambah = 0
    
    if(s.length < 2) {
        if(d == s[0]) {
            return 1;
        }
    }
     
    for(let i = 0; i < s.length; i++) {
        // i = 0
        penambah += s[i];
        // penambah += 1
        for(let j = i+1; j < m+i; j++) {
            // j = 1; 1 < 2
            penambah += s[j];
            // penambah += 2
        }
    
        if(penambah === d) {
            // 3 == 3
            result += 1;
        }
        
        penambah = 0;
    }
    
    return result;
    }
    
    console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1],18,7));
    