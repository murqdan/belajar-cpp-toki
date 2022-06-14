function pairElement([...str]) {
  let newArr = [];
  str.map((el) => newArr.push([el]));

/*   for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "G") {
      newArr[i].push("C");
    } else if (newArr[i][0] === "C") {
      newArr[i].push("G");
    } else if (newArr[i][0] === "A") {
      newArr[i].push("T");
    } else if (newArr[i][0] === "T") {
      newArr[i].push("A");
    }
  } */
  return str;
}

// const pairElement = (str) => str.split("").map((el) => [el, { G: "C", C: "G", T: "A", A: "T" }[el]]);

console.log(pairElement("GCG"));
