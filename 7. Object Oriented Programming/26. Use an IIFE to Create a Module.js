// let motionModule = (function () {
//   return {
//     glideMixin(obj) {
//       obj.glide = function () {
//         console.log("Gliding on the water");
//       };
//     },
//     flyMixin(obj) {
//       obj.fly = function () {
//         console.log("Flying, wooosh!");
//       };
//     },
//   };
// })();

// let duck = {
//   name: "Donald",
//   numLegs: 2,
// };

// motionModule.glideMixin(duck);
// duck.glide();

let funModule = (function () {
  return {
    isCuteMixin(obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin(obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

function Person(name) {
  this.name = `My name is ${name}`;
}

const man = new Person("Murafad");

funModule.singMixin(man);
console.log(man.name);
man.sing();
