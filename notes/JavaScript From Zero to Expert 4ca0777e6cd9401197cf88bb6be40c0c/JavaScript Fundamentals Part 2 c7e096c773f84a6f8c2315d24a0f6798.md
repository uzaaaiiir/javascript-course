# JavaScript Fundamentals Part 2

# Strict Mode

**Strict Mode** — is a way to opt-in to a restricted variant of JavaScript

- Has intentionally different semantics from normal code
- Makes several changes to normal JavaScript semantics:
    - Eliminates some JavaScript silent errors by changing them to throw errors.
    - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode can sometimes be made to run faster than identical code that’s not strict mode.
    - Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Invoking Strict Mode

- Put the exact statement `"use strict";` before any statement
- Can apply to *entire scripts* or *individual* functions

```jsx
// Whole-Script strict mode syntax
"use strict"; 

// Function strict mode synax
function myStrictFunction() {
		"use strict";
		return "I am strict"; 
}
```

---

# Functions

## Function Declaration

- **Functions** — blocks of code that can be stored & reused in a program
    - **Function Declaration** — defines a function with specified parameters. Uses the `function` keyword with the function name.

```jsx
function logger() {
		console.log("Hi!"); 
}

logger(); // Function Call
```

**Function Header** — function name

- Example: `logger()`

**Function Body** — Block of code between curly braces

**Function Invocation/Calling** — Calling the function 

### Function Parameters

- **Function Parameters** — Named variables passed into a function
    - They act as placeholders for arguments passed to the function

- **Arguments** — inputs passed to the actual function into the parameters
    - Example: `adder(3,2)` passes 3,2 as the arguments to the parameters in the function

```jsx
function adder(a, b) {
		return a + b;
}
console.log(adder(3,2)); // returns 5
```

`return` specifies the value returned by the function

- Returned values can be stored in variables and used in expressions

---

## Function Expression

**Function Expression** — Involves defining a function inside an expression

- Function expressions can omit the function name to create an anonymous function
- The function can be stored inside a *variable*

```jsx
// Function Expression
const age = function(year) {
		return 2022 - year; 
}

// Call the Function Expression
age(1999); 
```

---

## Function Declarations vs Expressions

- Function declarations can be called before defining it

- Function expressions CANNOT be called before defining it

---

## Arrow Functions

**Arrow Function Expression** — Compact alternative to the traditional funciton expression 

- Limitations to Arrow Functions:
    - Don’t have own bindings: `this`, `arguments`, or `super`
    - Don’t have access to the `new.target` keyword
    - Aren’t suitable for `call`, `apply`, and `bind` methods, which rely on scope
    - Cannot be used as constructors
    - Cannot use `yield`, within its body

```jsx
// Arrow Function 
const <varName> = param => expression; 
const <varName> = (param1, paramN) => expression; 
		// The expression returns a value 

// Example 
const calcAge = birthYear => 2037 - birthYear;
const add = (param) => {
	const a = 1; 
	return param + a;   
}

```

---

## Functions Calling Other Functions

![Untitled](JavaScript%20Fundamentals%20Part%202%20c7e096c773f84a6f8c2315d24a0f6798/Untitled.png)

---

## Function Review

### Review: 3 Types of Functions

![Untitled](JavaScript%20Fundamentals%20Part%202%20c7e096c773f84a6f8c2315d24a0f6798/Untitled%201.png)

### Review: Anatomy of a Function

![Untitled](JavaScript%20Fundamentals%20Part%202%20c7e096c773f84a6f8c2315d24a0f6798/Untitled%202.png)

---

# Arrays

<aside>
💡 **Array** — Object that stores a collection of multiple items under a single variable name

- Array is a sequence of items stored continguously back-to-back within memory
- JS arrays are *resizable* and can *mix types*
    - Copy operation creates a shallow copy
- *Zero-indexed*
</aside>

## Array Syntax

`const arr_name = [item1, item2,...];`

`const arr_name = new Array(item1, item2,...);`

## Array Methods

`push()` — adds element to end of array & returns the new length

`unshift()` — adds element to beginning of array & returns new length

`pop()` — removes last item from array & returns it 

`shift()` — removes first element from array & returns it 

`concat()` — creates a new array by concatenating two existing arrays 

`splice()` — changes an aray by removing/replacing existing elements and/or adding new elements in place 

```jsx
// Synax
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1, item2, itemN);

// Example 
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 2, "Lemon", "Kiwi");

// New Arr: ['Banana', 'Orange', 'Lemon', 'Kiwi'];
// Returned Arr: ["Apple", "Mango"]
```

- `start` — the index at which to start chanigng the array
- `deleteCount` — Integer indicating the number of elements in the array to remove from `start`
- `item1, ..., itemN` — The elements to add to the array beginning from start

`slice()` — Returns a copy of a portion of an array into a new array object from `start` to `end` 

- Original array is not modified
    
    ```jsx
    // Syntax 
    slice();
    slice(start);
    slice(start, end); 
    
    // Example
    numbers = [0, 3, 4, 6, 7];
    numbers.slice(2, -1); 
    // returns [4, 6]
    ```
    

`reverse()` — Method that reverses the items in a given array and mutates the array

```jsx
// Example
const arr = [1, 2, 3];
console.log(arr.reverse());
// Output: [3, 2, 1] 
```

`join()` — Creates and returns a new string by concatenating all elements in a n array, separated by commas or a specified separator 

```jsx
// Synax
join();
join(separator); 
```

`at()` — Takes an integer and returns the item at that index, allowing for positive and negative integers 

---

# Objects

<aside>
➡️ **Objects**— collection of properties, and a property is an association between a name (or `key`) and a value

- A property is known as a *method* when it’s value is a function
- Objects store fields and behaviours
</aside>

## Object Syntax

**Object Literals** are used to declare objects 

- *Object Literals* are a comma-separated list of key:value pairs inside of curly braces

```jsx
// Syntax 
const person = {
		firstName: "Uzair", 
		lastName: "Mohiuddin", 
		age: 23, 
		eyeColor: "brown",
};
```

```jsx
// Syntax 
 const person = new Object();
personObj.firstName = "Uzair";
personObj.lastName = "Mohiuddin";
personObj.age = 23;
personObj.eyeColor = "brown;
```

## Object Methods

<aside>
➡️ **Object Methods** — Objects have methods which are actions that can be performed on objects

- A **method** is a function stored as property
</aside>

```jsx
// Syntax 
const person = {
		firstName: "Uzair", 
		lastName: "Mohiuddin", 
		age: 23, 
		eyeColor: "brown",
		fullName: function() {
				return `${this.firstName} ${this.lastName}`;
				// **this** refers to the object itself
		}
}
```

## Accessing Properties and Methods

`objectName.propertyName`

`objectName["propertyName"]`

`objectName.methodName()`

```jsx
person.age; // 23
person["age"]; //23 
person.fullName(); // Uzair Mohiuddin
```

---

# Loops

`for loop` 

```jsx
for (let i = 0; i < 5; i++) {
		// block of code 
}
```

- `i < 5` is the condition for executing the block
- `i++` is executed after the block has been executed

`for/in` 

```jsx
for (key in object) {
		// block of code 
}
```

- Loops throughts `properties` of an object
- Ex. `for (let x in person) {}`

---

`for/of`

```jsx
for (variable of iterable) {
		// block of code
}
```

- Loops through values of an iterable object
- `iterable.entries()` provides the `index` and `value` of each item
- Ex. `for (let x of nums)`

`while`

```jsx
while (condition) {
		// block of code
}
```

- Continues to execute block of code as long as condition is true
- Used when we don’t know how many times to execute a loop

---

`continue`

- Exits current iteration of loop and moves to the next one

`break`

- Terminates execution of loop