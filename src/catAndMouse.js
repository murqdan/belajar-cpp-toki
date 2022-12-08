function catAndMouse(x, y, z) {
    let catA = x - z;
    let catB = y - z;
    
    if(catA < 0) {
        catA = catA * -1;
    }
    
    if(catB < 0) {
        catB = catB * -1;
    }
    
    if(catA == catB) {
        return "Mouse C";
    } else if(catA < catB) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}