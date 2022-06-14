function truthCheck(collection, pre) {
  const newArr = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]) {
      newArr.push(true);
    } else {
      return false;
    }
  }

  return newArr[0];
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);
