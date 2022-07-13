'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

//////////////////////////////////////////////
// WORKING WITH STRINGS - Part 1

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('z')); // -1
console.log(airline.indexOf('Portugal')); // 8

// slice(start, end) goes from the beginning(inclusive), to the end(non-inclusive)
console.log(airline.slice(4, 6)); // Ai
console.log(airline.slice(airline.indexOf('Portugal'))); // Portugal
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat!');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B'); // middle seat
checkMiddleSeat('23C'); // not middle seat
checkMiddleSeat('3E'); // middle seat

/** JS converts a String primitive to a String object behind the scenes to apply methods to it
 * -- known as Boxing
 * -- JS does the following: new String('Jonas');
 * -- Once the method is done being applied, the object is converted back to a String primitive
 * -- Thus, all string methods return a primitive, even if called on a string object
 *
 */

console.log(new String('Uzair')); // String object
console.log(typeof new String('Uzair')); // object
console.log(typeof 'Uzair'); // string
console.log(typeof new String('Uzair').slice(1)); // string

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

//////////////////////////////////////////
// WORKING WITH STRINGS - Part 2

// Example: Fix capitalization in name
const passenger = 'uZaIr';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Uzair

// Example: Compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io  \n\t';
const normalizedLoginEmail = loginEmail.toLowerCase().trim(); // 'hello@jonas.io'
console.log(
  email.toLowerCase() === normalizedLoginEmail
    ? 'Correct email!'
    : 'Incorrect email!'
);

// Replacing part of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // '288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// replace returns a String

// Regular Expressions
console.log(announcement.replace(/door/g, 'gate')); // changes all the occurrences instead of just the first

// Boolea Returns (includes(), startsWith(), endsWith())
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320')); // true
console.log(newPlane.includes('Boeing')); //false

console.log(newPlane.startsWith('Air')); // true
console.log(newPlane.startsWith('Aib')); // false

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the new AirBus Family!');
} else {
  console.log('Part of old AirBus Family.');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  const allowed =
    baggage.includes('knife') || baggage.includes('gun')
      ? 'You are NOT allowed on board.'
      : 'Welcome Aboard!';
  console.log(allowed);
};

checkBaggage('I have a Laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////
// WORKING WITH STRINGS - PART 3
console.log('a+very+nice+string'.split('+')); // returns an array with the split array based on the divider
console.log('Uzair Mohiuddin'.split(' '));

const [firstName, lastName] = 'Uzair Mohiuddin'.split(' ');
console.log(firstName, lastName);

// join() returns a string given an array
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('uzair mohiuddin');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); // 25 is the lenght you want the string to be with the added apdding
console.log('Uzair'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // implicitly converts the number to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);

/////////////////////////
// STRING EXTRA PRACTICE

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightArr = flights.split('+');
console.log(flightArr);

for (const flightItem of flightArr) {
  const [title, to, from, time] = flightItem.split(';');
  console.log(title, to, from, time);
}
