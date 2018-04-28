// Car constructor
function Car(model, age, mph, year) {
    this.model = model;
    this.age = age;
    this.mph = mph;
    this.year = year;
}

// Create a car
const myFirstCar = new Car('BMW', 25, 165, 1982);
const mySecondCar = new Car('Merc', 2, 200, 2000);

// Show model and speed
Car.prototype.showModelAndSpeed = function() {
    return `${this.model} ${this.mph}`
}

// Show year
Car.prototype.showYear = function() {
    return this.year - this.age;
}


console.log(mySecondCar);

console.log(myFirstCar.showModelAndSpeed());

console.log(mySecondCar.showYear());


