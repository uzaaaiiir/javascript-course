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

function solution(number) {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(10));

function descendingOrder(n) {
  //...
  let result = "";
  let numberString = String(n);
  let number = numberString.split("");

  for (let i = 0; i < number.length; i++) {
    let largest = Number(number[i]);
    for (let j = i; j < number.length; j++) {
      if (Number(number[j]) > largest) {
        largest = Number(number[j]);
      }
    }

    console.log(result);
    result += largest;
  }

  return Number(result);
}

console.log(descendingOrder(15));

// ATM Machines Allow 4 or 6 digit PIN codes nad PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits
// If the function is passed a valid pin string, return true, otherwise false
function validatePIN(pin) {
  pinNumber = String(Math.ceil(Number(pin)));
  if (pinNumber.length == 4 || pinNumber.length == 6) {
    if (Number.isInteger(Number(pinNumber)) && pinNumber >= 0) {
      return true;
    }
  }

  return false;
}

function findShort(s) {
  const arrOfWords = s.split(" ");
  console.log(arrOfWords);
  let shortestLength = 0;
  console.log(arrOfWords.length);

  shortestLength = arrOfWords.length > 0 ? arrOfWords[0].length : 0;

  for (let i = 1; i < arrOfWords.length; i++) {
    console.log(i);
    if (arrOfWords[i].length < shortestLength) {
      shortestLength = arrOfWords[i].length;
      console.log(shortestLength);
    }
  }
  return shortestLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
