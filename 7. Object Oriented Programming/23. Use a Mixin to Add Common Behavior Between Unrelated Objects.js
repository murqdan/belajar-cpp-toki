let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
function glideMixin(obj) {
  obj.glide = () => console.log("Glide, wooosh!");
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
