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
