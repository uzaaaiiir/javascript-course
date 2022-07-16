'use strict';

/** DEFAULT PARAMETERS
 * -- if no parameters are passed, the unassigned parameters are going to be set to undefined
 */

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  numPassengers = numPassengers || 1;
  price ||= 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking(5, 5, 5);
