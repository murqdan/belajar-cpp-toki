function breakingRecords(scores) {
    // Write your code here
    let highLowScore = [scores[0],scores[0]];
    let count = [0,0];
    
    for(let i = 1; i < scores.length; i++) {
        if(highLowScore[0] < scores[i]) {
            highLowScore[0] = scores[i];
            count[0] += 1;
        } else if (highLowScore[1] > scores[i]) {
            highLowScore[1] = scores[i];
            count[1] += 1;
        }
    }
    
    return count;
}
