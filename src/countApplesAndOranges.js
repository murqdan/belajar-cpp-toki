function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let totalA = 0;
    let totalO = 0;

    let applesCalculate = [];

    for(let i = 0; i < apples.length; i++) {
        applesCalculate.push(a + apples[i]);
    }

    let orangesCalculate = [];

    for(let j = 0; j < oranges.length; j++) {
        orangesCalculate.push(b + oranges[j]);
    }

    for(let k = 0; k < applesCalculate.length; k++) {
        if(s <= applesCalculate[k] && applesCalculate[k] <= t) {
            totalA += 1;
        }
    }

    for(let l = 0; l < orangesCalculate.length; l++) {
        if(s <= orangesCalculate[l] && orangesCalculate[l] <= t) {
            totalO += 1; 
        }
    }

    console.log(totalA);
    console.log(totalO);
}