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

/*
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
*/

/*
const calcAge = (birthYear) => 2022 - birthYear;

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const retirement = 65 - calcAge2(birthYear);

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
};

console.log(yearsUntilRetirement(1999, "Uzair"));
console.log(yearsUntilRetirement(1940, "John"));
*/

//////////////////////
// ARRAYS SECTION   //
//////////////////////
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);

console.log(friends[0]);

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const uzair = ["Uzair", "Mohiuddin", 2022 - 1999];
console.log(uzair);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

const yearBorn = [1990, 1967, 2002, 2010, 2018];
const age = [];

for (let i = 0; i < yearBorn.length; i++) {
    age[i] = calcAge(yearBorn[i]);
    console.log(yearBorn[i], age[i]);
}
*/

//////////////////////////////
// ARRAYS METHODS SECTION   //
//////////////////////////////
// Arrays are objects in JS -- methods are functions that can be called on objects

/*
const friends = ["Michael", "Steven", "Peter"];
// push methods adds an elements to an array and returns the length of the array
const newLength = friends.push("Uzair");
console.log(newLength); //logs 4

//unshift adds element to the beginning of array
// Also returns length of array
friends.unshift("John");
console.log(friends);

// Remove elements of array
// pop removes last element of array; returns the popped element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove first element
// use shift method
friends.shift();
console.log(friends);

// Get -1 if the element does not exist
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes -- returns true if element is in array, otherwise false
// uses strict equality for the comparison
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
*/

//////////////////////////////
// ARRAYS METHODS SECTION   //
//////////////////////////////
/*
const newName = {
    firstName: "Uzair",
    lastName: "Mohiuddin",
    age: 2022 - 1999,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
};
console.log(newName.firstName);
console.log(newName["firstName"]);

const nameKey = "Name";
console.log(newName["first" + nameKey], newName["last" + nameKey]);

const interestedIn = prompt(
    "What do you want to know about Uzair? Choose between firstName, lastName, age, job, and friends"
);

console.log(newName[interestedIn]);

if (newName[interestedIn]) {
    console.log(newName[interestedIn]);
} else {
    console.log("Invalid input.");
}

newName.location = "Ontario";
newName["twitter"] = "@UzairM__";
console.log(newName);

console.log(
    `${newName.firstName} has ${newName.friends.length} friends and his best friend is ${newName.friends[0]}`
);
*/

//////////////////////////////
//  OBJECTS SECTION   //
//////////////////////////////
/*
const newName = {
    firstName: "Uzair",
    lastName: "Mohiuddin",
    birthYear: 1999,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${
            this.job
        }. He ${
            this.hasDriversLicense ? "has" : "does not have"
        } a driver's license. He has ${
            this.friends.length
        } friends and his best friend is ${this.friends[0]}.`;
    },
};

console.log(newName.calcAge());
console.log(newName["calcAge"]());
console.log(newName.age);

console.log(newName.getSummary());
*/

//////////////////////////////
// LOOPS SECTION   //
//////////////////////////////
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

const types = [];
const typesPush = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
    types[i] = typeof jonasArray[i];
    typesPush.push(typeof jonasArray[i]);
}

console.log(types);
console.log(typesPush);

const years = [1991, 2007, 1969, 2020, 1999, 2005, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
    console.log(ages[i]);
}

// continue -- exits ccurrent iteration of loops and moves to the next one
// break -- exits the loops

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") {
        continue;
    }

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("\n--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") {
        break;
    }

    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

///////////////////////////////////////////////
// LOOP BACKWARDS AND NESTED LOOPS SECTION   //
///////////////////////////////////////////////

/* 
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i > -1; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 0; exercise < 3; exercise++) {
    console.log(`----- Starting exercise ${exercise + 1}`);

    for (let rep = 0; rep < 5; rep++) {
        console.log(
            `Exercise ${exercise + 1}: Lifting weight repetition ${rep + 1} 🏋️‍♀️`
        );
    }
}
*/

/////////////////////
// WHILE SECTION   //
/////////////////////

// for (let rep = 0; rep < 5; rep++) {
//     console.log(`Lifting weight repetition ${rep + 1} 🏋️‍♀️`);
// }
/*
let i = 0;
while (i < 10) {
    console.log(`WHILE: Lifting weight repitition ${i + 1}`);
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log("Loop is about to end ...");
}
*/
