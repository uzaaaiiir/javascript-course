"use strict";
////////////////////////////////
// STRICT MODE SECTION        //
////////////////////////////////
/**
 * STRICT MODE
 * -- To use strict mode -- write 'use strict'; at beginning of JS file
 * -- must be first line in the script
 * -- strict mode helps indicate bugs
 * -- strict mode reserves certain words that will be introduced in future versions
 */

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive!:D");

// const interface = 'Audio';
// const private = 534;
*/

////////////////////////////////
// FUNCTIONS SECTION          //
////////////////////////////////
/**
 * FUNCTIONS
 * -- function keyword used to define a function
 * -- define function body in curly braces
 * -- call/invoke/run a function using the function name
 *
 * -- parameters - are variables passed into the function from the arguments
 *      -- act as placeholders for inputs/arguments passed into the function
 */

/*
function logger() {
    console.log("My name is Jonas!");
}

logger();
logger();
logger();

function adder(a, b) {
    return a + b;
}

let sum = adder(5, 3);
console.log(sum);

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 3));

const appleOrangeJuice = fruitProcessor(2, 4);
*/

//////////////////////////////////////////////////
// FUNCTION DECLARATIONS VS EXPRESSIONS SECTION //
//////////////////////////////////////////////////
/**
 * FUNCTION DECLARATIONS VS EXPRESSIONS
 * -- To use strict mode -- write 'use strict'; at beginning of JS file
 * -- must be first line in the script
 * -- strict mode helps indicate bugs
 * -- strict mode reserves certain words that will be introduced in future versions
 *
 * Function Expression in JS
 * -- Can create a function expression in JS that doesn't have a name and can be stored in a variable
 */

/*
// Function declaration
function calcAge1(birthYear) {
    // const currentYear = 2037;
    return 2022 - birthYear;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};
const age2 = calcAge2(1999);

console.log(age1, age2);
console.log(calcAge2(1999));

const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;
};
const yearsRemaining = yearsUntilRetirement(1999, "Uzair");
console.log(yearsRemaining);
*/

////////////////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS SECTIO   //
////////////////////////////////////////////////
/**
 * Functions calling other functions
 * --
 */

/*
const fruitProcessor2 = function (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
};

const fruitProcessor3 = (apples, oranges) => {
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
};

console.log(fruitProcessor(1, 2));
console.log(fruitProcessor2(1, 2));
console.log(fruitProcessor3(1, 2));
*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
    return juice;
}

console.log(fruitProcessor(2, 3));
