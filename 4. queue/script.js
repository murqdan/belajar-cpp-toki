// First In First Out (FIFO)
/* setiap data baru yang masuk maka akan pertama keluar */
/* data hanya dapat masuk di akhir antrian */
/* ibarat antrian di loket */

function createQueue() {
  let queue = []; // [1,2,3,4,5]

  return {
    enqueue: function (el) {
      queue.push(el);
    },
    dequeue: function () {
      queue.shift();
    },
    peek: function () {
      return queue[0];
    },
    size: function () {
      return queue;
    },
  };
}

const peopleBuy = createQueue();

peopleBuy.enqueue(1);
peopleBuy.enqueue(2);
peopleBuy.enqueue(3);
peopleBuy.enqueue(4);
peopleBuy.enqueue(5);

console.log(peopleBuy.peek());
console.log(peopleBuy.size());

peopleBuy.dequeue();
peopleBuy.dequeue();
peopleBuy.dequeue();

console.log(peopleBuy.peek());
console.log(peopleBuy.size());
