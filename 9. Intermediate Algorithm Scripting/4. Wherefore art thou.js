function whatIsInAName(collection, source) {
  return collection.filter((obj) =>
    Object.keys(source).every((key) => obj[key] === source[key])
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
