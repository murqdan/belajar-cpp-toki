function lonelyinteger(a) {
    // Write your code here
    let notLonely = [];
    
    for(let i = 0; i <= a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[i] == a[j] && i != j) {
                notLonely.push(a[i])
            }
        }
    }
    
    for(let i = 0; i < notLonely.length; i++) {
        a = a.filter(e => e !== notLonely[i])
    }
    
    return a[0];
}


console.log(lonelyinteger([1,2,3,4,3,2,1]))