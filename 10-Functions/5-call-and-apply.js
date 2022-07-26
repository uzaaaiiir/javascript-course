'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Uzair Mohiuddin');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // does not work
// book becomes a regular function now and the this keyword is undefined for regular functions

/////// CALL METHOD
// the first arguments specifies what we want the this keyword to be
// the rest of the arguments are the arguments of the function
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Jane');
console.log(swiss);

////// APPLY METHOD
// Takes an array of the arguments and passes it into the function
// Not uses often in modern javascript
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
