/////////////////
// NEW SECTION //
/////////////////
/* VALUES 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Uzair");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// VARIABLE NAMING
// -- letters, numbers, and $ sign
// -- Cannot begin with numbers
// -- Cannot use reserved words
// -- Do not start with Upper Case - used for Classes
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";

// CONSTANTS
// -- use uppercase for constants
let PI = 3.14159;

// Variable names need to be descriptive
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
*/

/////////////////
// NEW SECTION //
/////////////////
/* DATATYPES
-- Boolean is a value that is only true or false
-- String is a sequence of characters
-- Number is floating point numbers 

typeof can be used to determine the datatype of a value stored in a variable 
-- Bug in JS: if you use (typeof null) --> it returns object(this is a bug in JS)

Dynamic Typing in JS 
-- Can change the type of a value held in a variable
-- done by reassigning a variable to a new value 
*/

/* // DATA TYPES CODE
let javascriptIsFun = true;

// console.log(true);
// console.log(typeof 14);
// console.log(typeof "Jonas");

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let isIsland = false;
let language;
let country = "Canada";
let population = 34100000;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);
*/

/////////////////
// NEW SECTION //
/////////////////
/* 3 WAYS TO DECLARE VARIABLES: let, const, and var
-- var is old way of declaring variables
-- let and const are introduced in modern JS 

-- let is used when we want to mutate a variable (change the value of a variable after assigning it)
    -- Also used to create empty variables before assigning it
-- const is used to declase constants 
    -- used to declare values that can't be changed after assignment
    -- used for immutable var - variables that cannot be changed 
*/

/*
// Reassigning a value to a variable
let age = 30;
console.log(age);
age = 31;
console.log(age);

//const
const birth = 1991;
console.log(birth);
//birth = 1992; //Get an Error

var job = "programmer";
job = "teacher";

lastName = "Mohiuddin";
console.log(lastName);
*/

/////////////////
// NEW SECTION //
/////////////////
/* BASIC OPERATORS
Arithmetic Operators: + - * / % 
-- Exponentiation: ** 
-- Concatenating Strings: can use plus to concatenate strings 

Assignment Operators:
-- = is an assignment operator 
-- += is syntactic sugar -> Ex. x+=10 means x = x + 10;
-- -+ -> x = x - 10;
-- x++ and x-- increments/decrements by 1

Comparison/Boolean Operators:
> < >= <= 
-- Always returns true or false
 */

/*
// ARITHMETIC OPERATORS
const now = 2030;
const ageUzair = now - 1999;
const ageSarah = now - 2005;
console.log(ageUzair, ageSarah);
console.log(ageUzair * 2, ageUzair / 10, 2 ** 3);
const firstName = "Uzair";
const lastName = "Mohiuddin";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
// The right side expression is evaluated and assigned to the variable
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = 100
x++;
console.log(x);

// COMPARISON OPERATORS
console.log(ageUzair > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 2030 > now - 2018);
*/

/////////////////
// NEW SECTION //
/////////////////
/* OPERATOR PRECEDENCE
-- order in which operators are executed
 */
/*
const now = 2030;
const ageUzair = now - 1999;
const ageSarah = now - 2005;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

console.log(ageUzair);
console.log(ageSarah);

const averageAge = (ageUzair + ageSarah) / 2;
console.log(averageAge);
*/

/////////////////
// NEW SECTION //
/////////////////
/* STRING and TEMPLATE LITERALS
-- can concatenates strings together 
-- numbers will be type coerced to strings

TEMPLATE LITERALS
-- Allows us inserting the variables directly into the string
-- To insert variables: let nameAndJob = `my name is ${name} and my job is ${job}`;
-- `` back ticks for quotes also allows us to create multi-line stirngs 
*/

/*
const firstName = "Jonas";
const job = "software engineer";
const birthYear = 1999;
const year = 2022;

const jonas =
    "I'm  " +
    firstName +
    ", a " +
    (year - birthYear) +
    " year old " +
    job +
    "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \nmultiple \nlines");
console.log(`String with
multiple
lines`);
*/

/////////////////
// NEW SECTION //
/////////////////
/* CONDITIONAL STATEMENTS
 */
/*
const age = 14;

if (age >= 18) {
    console.log("You can drive! 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`You can't drive! You have ${yearsLeft} years left! ❌`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/////////////////
// NEW SECTION //
/////////////////
/* TYPE CONVERSION AND COERCION

-- type conversion - when we manually convert between datatypes
-- type coercion - when javascript implicitly & automatically converts between types 
 */

/*
let inputYear = "1991";
inputYear = Number(inputYear);
console.log(inputYear);
console.log(Number(inputYear) + 18);

inputYear = String(inputYear);
console.log(inputYear);

// type coercion
let num = "1";
console.log(num);
num = num + 4;
console.log(num);
*/

/////////////////
// NEW SECTION //
/////////////////
/* TRUTHY AND FALSY VALUES

-- falsy values - are values that are not false, but become false when you try to convert them to a boolean
    -- 5 falsy values: 0, '', undefined, null, NaN
    -- when you attempt to convert these to a boolean, they become false
-- truthy values - everything else is converted to true when you attempt to convert to a boolean
 */

/*
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("Hello"));
console.log(Boolean(5));
console.log(Boolean({}));

const money = 0;
console.log(money, Boolean(money));

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else if (height == 0) {
    console.log("You have no height!");
} else {
    console.log("Height is undefined!");
}
*/

/////////////////
// NEW SECTION //
/////////////////
/* EQUALITY OPERATORS: == and ===

--
 */

/*
const age = "18";
if (age === 18) console.log("You are of legal age! (strict)");
if (age == 18) console.log("You are of legal age! (loose)");

const favNum = Number(prompt("What's your favorite number?"));
console.log(favNum);
console.log(typeof favNum);

if (favNum === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favNum === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not 23 or 7. Not cool. :/");
}

if (favNum !== 23) {
    console.log("Why not 23!");
}
*/

/////////////////
// NEW SECTION //
/////////////////
/* 

-- falsy
 */
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);
console.log(!hasDriversLicense || !hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else shoul ddrive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/

/////////////////
// NEW SECTION //
/////////////////
/* SWITCH STATEMENTS


-- falsy
 */

const day = "saturday";

switch (day) {
    case "monday": // day === 'monday'
        console.log("Plan Course Structure");
        console.log("Go to coding meet-up!");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the Weekend!");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan Course Structure");
    console.log("Go to coding meet-up!");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos!");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Not a valid day!");
}
