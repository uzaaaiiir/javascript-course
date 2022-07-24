'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Check In!');
  } else {
    console.log('Wrong Passport.');
  }
};

checkIn(flight, jonas);
console.log(flight, jonas.name);
// flight is a primite and doesn't change
// when passed to the funciton, it's past as a copy and not the original variable
// Creates a new variable and stores the flight value in it
// jonas is an object -- when it's passed, it passed the pointer to the object
// at both locations, they now both point to the same object
// passes the reference to the object in the heap memory

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
console.log(jonas.passport);
checkIn(flight, jonas);

// passing by value vs passing by reference
/** JavaScript only passes by value
 * -- For reference types, the variable stores a reference and that is the value passed to the function
 *  -- Passes a reference, but it's not passed BY reference
 * -- For primitive tyes, the variable stores the value and that value is passed
 */
