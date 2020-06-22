var a = {
  n: "d",
  myFunc() {
    console.log("This is function inside object literal", this.n);
  },
  // in arrow function like below 'this' refer to its own context instead of object literal context
  myArrowFuntion: () =>
    console.log("This is function inside object literal", this.n),
};

a.myFunc();
a.myArrowFuntion();
