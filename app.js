// // Person constructor

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Get Married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978')

// console.log(mary);
// console.log(mary.calculateAge());
// console.log(mary.getFullName());

// mary.getsMarried('Kowalski');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));


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


