const Person = function (firstAndLast) {
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };

  this.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function (first) {
    firstAndLast = first + " " + this.getLastName();
  };

  this.setLastName = function (last) {
    firstAndLast = this.getFirstName() + " " + last;
  };

  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
