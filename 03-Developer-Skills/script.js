// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 0;

if (x === 0) {
  console.log("It's zero");
} else {
  console.log("Its not zero");
}

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1999));

console.log(13);

console.log(calcAge(2005));
