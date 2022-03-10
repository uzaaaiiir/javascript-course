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
 */
