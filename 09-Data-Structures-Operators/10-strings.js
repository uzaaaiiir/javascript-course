'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

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
