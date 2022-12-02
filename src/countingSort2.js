function countingSort2(arr) {
    let result = [];
    let fixre = [];
    
    for(let i = 0; i < 100; i++) {
        result.push(0)
    }
    
    for(let j = 0; j < arr.length; j++) {
        result[arr[j]] += 1
    }

    for(let k = 0; k < result.length; k++) {
        if(result[k] !== 0) {
            for(let j = 0; j < result[k]; j++) {
                fixre.push(k)
            }
        }   
    }
    
    return fixre;
}