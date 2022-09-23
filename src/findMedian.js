function findMedian(arr) {
    // Write your code here
    let newarrsort = arr.sort(function(a, b){return a - b});
    return newarrsort[Math.floor(newarrsort.length /2)]
}