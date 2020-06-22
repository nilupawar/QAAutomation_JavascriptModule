// This one is not immediately invoked
var CapitalName = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.showFirstName = function showFirstName() {
    console.log(`First name is ${this.firstName}`);
  };
  this.showLastName = function showLastName() {
    console.log(`Last name is ${this.lastName}`);
  };
};

let obj1 = new CapitalName("Nilesh", "Pawar");
let obj2 = new CapitalName("Tulja", "Pawar");
obj1.showFirstName();
obj1.showLastName();
obj2.showFirstName();
obj2.showLastName();
