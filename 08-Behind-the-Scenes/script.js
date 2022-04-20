'use strict';
/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); // Global variable available in function scope

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    } else {
      millenial = false;
      const firstName = 'John'; // separate firstName var that is block scoped
      const str = `You're not a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // const and let are block scoped and only available in the block they are created
    console.log(millenial); // var is function scoped not block scoped
    // add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Uzair';
calcAge(1999);
// console.log(age); // Function Scopes variable -- inaccessible outside calcAge function

const myName = 'Jonas';

if (myName === 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  var job = 'teacher';
}

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

console.log(me1); // var is hoisted and can be accessed before declaration
// console.log(job1); // Reference error -- in temporal dead zone
// console.log(year1); // reference error - in temporal dead zone

var me1 = 'Jonas';
let job1 = 'teacher';
const year1 = 1999;

// function hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// Can only use function declarations before declaration
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

//  Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

console.log(this);
const calcAge2 = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge2(1999);

const calcAge2Arr = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge2Arr(1999);

const uzair = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

uzair.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = uzair.calcAge;
console.log(matilda);
matilda.calcAge();

const f = uzair.calcAge;
console.log(f());
*/

var firstName = 'matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // isMillenial is treated as a function -- not a method
    // The this keyword is undefined for functions

    // Solution 1: introduce a self variable
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2: Use arrow function
    // Arrow function gets this ketword from parent
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey, ${this.firstName}`);
    console.log(this);
  },
};

console.log(this.firstName);
jonas.greet();
jonas.calcAge();
