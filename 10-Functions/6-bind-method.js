'use strict';

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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

/**BIND METHOD
 * -- Does not immediately call the function
 * -- returns a new function where the this keyword is bound to the function
 * -- Takes a sepcific this keyword and binds it to a function, doesn't callthe function right away
 * -- Can bind specific arguments as well -- when called after that, only need to specify the remaining arguments
 */
const flightData = [239, 'Zoha Rashid'];
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(...flightData);
bookEW(234, 'Steve Jobs');

// Known as Partial Application -- where parts of the function are pre-defined
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Michael James');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// in an Event Handler, the this keyword of lufthansa.buyPlane points to the element on which the handler is attached to
// in the handler function, the this keyword points to the button and not the lufthansa object
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addHST = addTax.bind(null, 0.13); // returns a NEW function rather than setting default parameters
// addTax = value => value + value * 0.13;
console.log(addHST(100));

function basicTax(rate) {
  return function taxWithRate(value) {
    return value + value * rate;
  };
}

const taxHST = basicTax(0.13);
console.log(taxHST(100));
console.log(basicTax(0.23)(50));
