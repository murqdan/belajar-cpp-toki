function countingSort1(arr) {
    let result = [];
    
    for(let i = 0; i < 100; i++) {
        result.push(0)
    }
    
    for(let j = 0; j < arr.length; j++) {
        result[arr[j]] += 1
    }
    
    return result;
}

console.log(countingSort1([1,1,3,2,1]));