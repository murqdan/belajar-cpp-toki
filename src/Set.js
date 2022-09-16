export function Set() {
  let size = 0;
  let array = [];

  return {
    add: function (value) {
      if (this.contains(value)) {
        return false;
      } else {
        array[size] = value;
        size++;
        return true;
      }
    },
    contains: function (value) {
      for (const item of array) {
        if (value == item) {
          return true;
        }
      }
      return false;
    },
    size: function () {
      return size;
    },
    remove: function (value) {
      let index = array.indexOf(value);

      if (index > -1) {
        array.splice(index, 1);
        size--;
        return true;
      } else {
        return false;
      }
    },
  };
}
