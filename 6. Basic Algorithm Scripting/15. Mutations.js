function mutation(arr) {
  const arr0 = arr[0].toLowerCase();
  const arr1 = arr[1].toLowerCase();

  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) == -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));
