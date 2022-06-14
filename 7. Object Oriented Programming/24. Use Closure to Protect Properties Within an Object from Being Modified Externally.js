function Bird() {
  const weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

const cendrawasih = new Bird();

console.log(cendrawasih.getWeight());
