function addTogether() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
  }
  if (arguments.length === 1) {
    let oldArg = arguments[0];

    return function () {
      let newArg = arguments[0];
      return addTogether(oldArg, newArg);
    };
  } else if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }
}

console.log(addTogether(2)("a"));
