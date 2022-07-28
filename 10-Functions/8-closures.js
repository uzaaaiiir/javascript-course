'use strict';

// Closures happen automatically in certain situations
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passenger Count: ${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
