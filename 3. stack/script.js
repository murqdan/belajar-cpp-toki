// Last In First Out (LIFO)
/* setiap ada data baru akan masuk ke atas tumpukan */
/* ibarat tumpukan piring ketika dicuci */

function createStack() {
  let array = [];

  return {
    push: function (el) {
      array.push(el);
    },
    pop: function () {
      array.pop();
    },
    peek: function () {
      return array[array.length - 1];
    },
    size: function () {
      return array;
    },
  };
}

const dirtyPlate = createStack();

dirtyPlate.push(1);
dirtyPlate.push(2);
dirtyPlate.push(3);
dirtyPlate.push(4);
dirtyPlate.push(5);

console.log(dirtyPlate.peek());
console.log(dirtyPlate.size());

dirtyPlate.pop();
dirtyPlate.pop();
dirtyPlate.pop();

console.log(dirtyPlate.peek());
console.log(dirtyPlate.size());
