class Car {
  constructor(options) {
    this.name = options.name;
    this.model = options.model;
    this.year = options.year;
    this.color = options.color;
    this.maxSpeed = options.maxSpeed;
    this.fuelCopacity = options.fuelCopacity || 60;
    this.fuelConsidity = options.fuelConsidity || 10;
  }

  getFullName() {
    return `${this.name} ${this.model}`;
  }

  getAge() {
    return `Year: ${this.year}`;
  }

  changeColor(newColor) {
    if (newColor === this.color) {
      alert("Color already selected");
    } else {
      this.color = newColor;
      alert(`Color changed to: ${this.color}`);

      return this.color;
    }
  }

  calculateWay(kilometers, fuel) {
    if (fuel < 10) {
      alert("You need to refuel transport");
    }

    let mediumSpeed = this.maxSpeed / 2;
    let time = (kilometers / mediumSpeed) * 60;
    alert(
      `Travel time at medium speed ${mediumSpeed} km/h was ${time} minutes`
    );

    let travelExpence = (this.fuelConsidity / 100) * kilometers;
    let howManyRefuel = travelExpence / this.fuelCopacity;

    if (fuel > travelExpence) {
      let result = "You have enough fuel";

      return result;
    } else {
      let result = `On the road you need ${travelExpence} liters. On the way you will need to refuel ${howManyRefuel} times.`;

      return result;
    }
  }
}

const newCarToyota = new Car({
  name: "Toyota",
  model: "Supra",
  year: 1998,
  color: "Orange",
  maxSpeed: 250,
});

class CarRetro extends Car {
  constructor(options) {
    super(options);
    this.typeOfCar = "Muscle Car";
  }

  getTypeOfCar() {
    return `The type of car is ${this.typeOfCar}`;
  }
}

const newCarFord = new CarRetro({
  name: "Ford",
  model: "Mustang",
  year: 1969,
  color: "Red",
  maxSpeed: 214,
});

class CarFuture extends Car {
  constructor(options) {
    super(options);
    this.electroCar = "Yes";
  }

  getInfoElectroType() {
    return `The car is an electric car: ${this.electroCar}`;
  }
}

const newCarMercedes = new CarFuture({
  name: "Mercedes",
  model: "AVTR",
  year: 2020,
  color: "Silver",
  maxSpeed: 420,
});

console.log(newCarToyota);
console.log(newCarToyota.getFullName());
console.log(newCarToyota.getAge());
console.log(newCarToyota.changeColor("Red"));
console.log(newCarToyota.calculateWay(3000, 24));

console.log(newCarFord);
console.log(newCarFord.getTypeOfCar());

console.log(newCarMercedes);
console.log(newCarMercedes.getFullName());
console.log(newCarMercedes.getAge());
console.log(newCarMercedes.getInfoElectroType());
