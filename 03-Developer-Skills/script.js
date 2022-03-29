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

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/**
 * Given an array of temperatures of one day, calculate the temperature amplitude.
 * Keep in mind that sometimes tehre might be a sensor error.
 */

/**
 * Understand the Problem
 * -- what is temp amplitude? Answer: different between the highest and lowest temp
 * -- how to compute max and min tempertures?
 * -- what's a sensor error? What to do?
 */

/**
 * 2) Break up into sub-problems
 * -- how to ignore errors?
 * -- Find max value in temp array
 * -- Find min value in temp array
 * -- subtract min from max (amplitude) and return it
 */

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-5, 20, 15];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (Number.isInteger(temps[i])) {
      if (temps[i] > max) {
        max = temps[i];
      } else if (temps[i] < min) {
        min = temps[i];
      }
    }
  }

  console.log(max, min);

  const tempAmplitude = max - min;

  return tempAmplitude;
};

console.log(calcTempAmplitude(temperatures));

// Problem 2:
// Function should now receive two arrays of temperatures

const calcTempAmplitude2 = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (Number.isInteger(temps[i])) {
      if (temps[i] > max) {
        max = temps[i];
      } else if (temps[i] < min) {
        min = temps[i];
      }
    }
  }

  console.log(max, min);

  const tempAmplitude = max - min;

  return tempAmplitude;
};

console.log(calcTempAmplitude2(temperatures, temperatures2));

/**
 * Write a function to reverse an array
 */

const reverse = function (arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

console.log(reverse([1, 3, 5, 7]));
