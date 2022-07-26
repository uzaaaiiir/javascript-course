'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Uzair');
greet('Hello')('Uzair');

// Returning functions with Arrow Functions
const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greetArrow("What's up")('Uzair');
