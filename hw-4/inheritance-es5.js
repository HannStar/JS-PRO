function Car(
  name,
  model,
  year,
  color,
  maxSpeed,
  fuelCopacity = 60,
  fuelConsidity = 10
) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCopacity = fuelCopacity;
  this.fuelConsidity = fuelConsidity;
}

Car.prototype.getFullName = function () {
  let fullName = `${this.name} ${this.model}`;

  return fullName;
};

Car.prototype.getAge = function () {
  return `Year: ${this.year}`;
};

Car.prototype.changeColor = function (newColor) {
  if (newColor === this.color) {
    alert("Color already selected");
  } else {
    this.color = newColor;
    alert(`Color changed to: ${this.color}`);

    return this.color;
  }
};

Car.prototype.calculateWay = function (kilometers, fuel) {
  if (fuel < 10) {
    alert("You need to refuel transport");
  }

  let mediumSpeed = this.maxSpeed / 2;
  let time = (kilometers / mediumSpeed) * 60;
  alert(`Travel time at medium speed ${mediumSpeed} km/h was ${time} minutes`);

  let travelExpence = (this.fuelConsidity / 100) * kilometers;
  let howManyRefuel = travelExpence / this.fuelCopacity;

  if (fuel > travelExpence) {
    let result = "You have enough fuel";

    return result;
  } else {
    let result = `On the road you need ${travelExpence} liters. On the way you will need to refuel ${howManyRefuel} times.`;

    return result;
  }
};

let getAge = Car.prototype.getAge;

const newCar = new Car("Toyota", "Supra", "1998", "Orange", 250);

console.log(newCar);
console.log(newCar.getFullName());
console.log(newCar.getAge());
console.log(newCar.changeColor("Red"));
console.log(newCar.calculateWay(3000, 24));
