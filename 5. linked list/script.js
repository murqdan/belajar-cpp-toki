/* masih berbasis array, tetapi setiap 
elemen di dalamnya saling terhubung */
/* secara performa linked list lebih baik daripada array */
/* ibarat gerbong kereta */
/* linkedlist ada berbagai macam : 
single list, double list, cyclical list*/
/* implementasi playlist music */

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push: function (value) {
      const node = createNode(value);

      // jika linkedlist kosong
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return node;
      } else {
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return node;
      }
    },
    pop: function () {
      // kosong
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;
      // satu node
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }
      // lebih dari satu node
      let current = this.head;
      let penult;
      while (current) {
        if (current.next === this.tail) {
          penult = current;
          break;
        }
        current = current.next;
      }
      penult.next = null;
      this.tail = penult;
      this.length -= 1;

      return node;
    },
    get: function (index) {
      // list kosong
      if (index < 0 || index > this.length) {
        return null;
      }
      // list item 1
      if (index === 0) {
        return this.head;
      }
      // list item > 1
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i += 1;
      }
      return current;
    },
    delete: function (index) {
      // list kosong
      if (index < 0 || index > this.length) {
        return null;
      }
      // list item 1
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length -= 1;

        return deleted;
      }
      // list item > 1
      let current = this.head;
      let prev;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current.next;
        i += 1;
      }

      const deleted = current;
      prev.next = current.next;
      this.length -= 1;

      return deleted;
    },
    isEmpty: function () {
      return this.length === 0;
    },
    print: function () {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(" => ");
    },
  };
}

const list = createLinkedList();
const values = ["a", "b", "c ", "d"];
const nodes = values.map((val) => list.push(val));

/* console.log(list.isEmpty());
console.log(list.pop().value); */

/* list.pop();
console.log(list.tail.value); */

/* list.pop();
console.log(list.get(1)); */

/* console.log(list.get(1)); */

list.pop();
console.log(list.delete(1));
console.log(list.print());

// how to make linked list in js?