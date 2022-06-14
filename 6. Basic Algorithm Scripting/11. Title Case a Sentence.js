function titleCase(str) {
  const result = [];
  const newArr = str.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    result.push(
      newArr[i][0].toUpperCase() + newArr[i].substring(1).toLowerCase()
    );
  }

  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
