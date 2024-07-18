// //Constructor to create new student object
// Student = (firstName, surname, age) => {
//   (this.firstName = firstName), (this.surname = surname), (this.age = age);
// };

// let student1 = new Student("Tatenda", "Matoi", 23);

// #### Note, you cannot create a constructor with an arrow function since they do not have the 'this', 'new', etc keywords

function Student(firstName, surname, age) {
  (this.firstName = firstName),
    (this.surname = surname),
    (this.age = age),
    (this.whoami = function () {
      console.log(
        `My name is ${this.firstName}, ${this.surname} and i am ${age} years old.`
      );
    });
}

let student1 = new Student("Tatenda", "Matoi", 23);

student1.whoami();

//car constructor
function Car(make, brand, year) {
  (this.make = make), (this.brand = brand), (this.year = year);
  this.sell = function () {
    console.log(
      `This is the ${this.brand}, that was manufactured in ${this.year}.`
    );
  };
}

let car1 = new Car("SUV", "Toyota", 2024);

car1.sell();
