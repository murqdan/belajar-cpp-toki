function convertHTML(str) {
  const strArr = str.split("");
  return strArr
    .map((huruf) => {
      switch (huruf) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return huruf;
      }
    })
    .join("");
}

convertHTML("Dolce & Gabbana");
