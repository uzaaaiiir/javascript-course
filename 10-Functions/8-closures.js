'use strict';

// Closures happen automatically in certain situations
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passenger Count: ${passengerCount}`);
  };
};

// Retains access to the variables present in the parent scope even when it's done executing
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

////////////////////////
// EXAMPLES OF CLOSURES

// EXAMPLE 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g(); // EC closed after call
f(); // Still has access to VE of g function even whne it's closed
console.dir(f); // closure: (g) {a: 23}

// Re-assigning f function
h();
f();
console.dir(f); // closeure: (h) {b: 777}

// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000;
boardPassengers(180, 3);
