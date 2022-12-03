function reversePrint(llist) {
    // Write your code here
    let result = [];
    
    let currentNode = llist;
    
    while(currentNode != null) {
        result.unshift(currentNode.data);
        currentNode = currentNode.next;
    }
    
    for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}