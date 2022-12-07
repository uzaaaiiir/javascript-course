# JavaScript Fundamentals Part 1

# Table of Contents

# What is JavaScript?

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled.png)

**JavaScript**

(1) **Programming Language** = tool allowing us to write code to instruct the computer to do things 

(2) **High Level Language** = Programming language with strong abstraction from the details of the computer

- Example: Don’t have to worry about complex stuff like memory management
- Abstracts over details JavaScript

(3) **Object-Oriented** = based on the concept of objects

(4) **Multi-Paradigm Language** = Can use different programming styles (i.e., declarative, imperative)

---

# Role of JavaScript in Web Development

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%201.png)

**HTML** — Responsible for describing the content of a webpage 

- Example: text, images, paragraphs, etc.

**CSS** — Responsible for presentation of the content

- Styling and layouts

**JavaScript** — Programming language responsible for adding dynamic and interactive effects to a webpage

- Example:
    - Can manipulate content/CSS
    - Load data from servers
    - Build entire apps in browser

### Example of Dynamic Effects

![**Note:** JS allows for dynamic effects. When data arrives, the spinner is hidden and the content is loaded onto the page.](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%202.png)

**Note:** JS allows for dynamic effects. When data arrives, the spinner is hidden and the content is loaded onto the page.

### Capability of JavaScript

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%203.png)

1) **Web Applications in Browser**

- Becoming good at JavaScript allows excelling into use of Frameworks
- Learning JS properly is an investment into Web Development journey

2) **Web Applications on Web Servers**

- JS can be run on a server using NodeJS
    - Allows us to make backend applications

3) **Native Mobile Applications**

4) **Native Desktop Applications**

---

# Modern JavaScript

![**Note**: 2015 was the major update to JavaScript known as EcmaScript 2015 or ES6](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%204.png)

**Note**: 2015 was the major update to JavaScript known as EcmaScript 2015 or ES6

**ES6 =** ECMAScript 6 or ECMAScript 2015

- New releases starting from ES6 is known as ***modern JavaScript***

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%205.png)

---

# Values and Variables

**Value** — piece of data

- Different data types that a value can represent:
    - Primitive Data Types
    - Reference Data Types

**Variable** — Used to store data in memory

- Memory location w/ a label (variable name) used to store a value
- Example:
    
    ```jsx
    let firstName = "Uzair";
    ```
    
- Use camel case for naming variables
    - Example: firstName, lastName

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%206.png)

---

# Data Types

| Data Type | Description | Example |
| --- | --- | --- |
| Number | → Floating point numbers
    → Used for decimals and integers | → let age = 23; |
| String | → Sequence of characters
    → Used for text | → let firstName = “Uzair”; |
| Boolean | → Logical type that can only be true or false
    → Used for taking decisions | → let fullAge = true; |
| Undefined | → Value taken by a variable that is not yet defined (’empty value’)
    → The variable has been declared but not assigned a value yet 
    → Empty variable holds the value of undefined and is of type undefined | → let children; |
| Null | → Also means ‘empty value’
    → Assignment value indicating the absence of a value  | → let age = null; |
| Symbol (ES2015) | → Value that is unique and cannot be changed  |  |
| BigInt (ES2020) | → Larger integers than the Number type can hold  |  |

**Dynamic Typing**  — The interpreter assigns variables a type at runtime based on the variable’s value at the time. 

- Data types assigned automatically
- Can use `typeof` operator to determine the type of a value

---

# `let` vs `const` vs `var`

**`const`** — used for values that can’t be changed after being assigned (immutable)

- `const birthYear = 1995;`

**`let`** — used for values that CAN be changed after being assigned (mutable)

- `let age = 22;`

**`var`** — used in older JS versions

- Functions similar to let but has different scoping and hoisting
- Never use `var`

*Good Practice* — use `const` unless you are sure the variable needs to be changed 

- If you don’t use `let`, `const`, or `var` — the variable is created as a global variable

---

# Operator Precedence

**Operator Precedence** — determines how operators are parsed concerning each other

- *Parentheses* have highest precedence
- Then, *Algebraic Expressions* are evaluated first
- Then, *Comparison Operators*
- Then, *Logical Operators* (&&, ||, !)
- Then, *Assignment Operator* occurs last
    - For Assignment — first the expression is evaluation and then stored
        - Occurs from right to left

---

# String and Template Literals

**String Literal** — A string value (sequence of characters) in the source code of the computer program.

**Template Literal** — Used to embed variables & expressions into string literals

- Uses backticks (``) for quotes
- Uses ${} to embed expressions

```jsx
const name = "Uzair";
const job = "Software Developer";
let nameSentence = `I am ${name} and I am a ${job}`;
```

---

# Conditional Statements

- **`if`** statement executes a statement if the condition is truthy
- **`else if`** is executed if the condition is truthy
- **`else`** is executed if the condition is falsy

*Note*: Only one conditional branch is executed, after which the program moves on. 

```jsx
const num = -5;
if (num > 0) {
	console.log(`Number ${num} is greater than 0`);
} else if (num === 0) {
	console.log(`Number is zero!`);
} else {
	console.log(`Number ${num} is less than zero`);
}
```

---

# Type Conversion and Coercion

### Type Conversion

**Type Conversion** — when we manually convert between data types

```jsx
// Example
let year = "1999";
year = Number(year); 
// -> Casts a String to a Number
// -> String(1999) converts it to "1999" String
```

### Type Coercion

**Type Coercion** — when JS implicitly & automatically converts between data types  

- `+` operator triggers Number to String
- `-` operator triggers String to Number
    - Subtraction can only work with numbers

```jsx
// Example 1: Implicit conversion of Number to String
let num = "1";
console.log(num + 4); // "14" 

// Example 2: Conversion from String to Number
console.log('23' - '10' - 3); // 10 
```

---

# Truthy and Falsy Values

**Falsy Values** — Values that are not false, but become false when you try to convert them to a boolean 

5 Falsy Values: 0, ‘’, undefined, null, NaN

**Truthy Values** — All other values are converted to true when you cast them to a boolean 

Example: Boolean(5) → produces true 

---

# Strict Equality vs Loose Equality

**Strict Equality Operator (===) →** returns true when the values and type are the same

- Does no perform type coercion
- Example: 18 === ‘18’; → returns false

**Loose Equality Operator (==)** → returns true if values are the same 

- Performs type coercion
- Example: 18 == ‘18’; → returns true

---

# Boolean Logic — And, Or, and Not Operators

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%207.png)

```jsx
// AND (&&)
expr1 && expr2;
```

```jsx
// OR (||)
expr1 || expr2;
```

```jsx
// NOT (!)
!expr;
```

---

# Switch Statement

**Switch Statements** → 

- Evaluates an expression
- Matches the expression’s value against a series of `case` clauses
- Executes statements after the first `case` clause with a matching value
- Continues executing until `break` statement is encountered
- The `default` clause of a `switch` statement will be jumped to if no `case` matches the expression’s value

```jsx
switch(<expression>) {
		case <X>:
				// code
				break; 
		case <Y>:
				// code
				break; 
		case <Z>:
				// code
				break; 
		default:
				// code executed when none values match the expression
				break; 
}
```

---

# Statements vs Expressions

**Expressions** — Produce a value, and that value can be passed into a function

- Example: 3+4; true && false

**Statements** — Don’t produce a value, so they can’t be used as function arguments

- Standalone units of code and do not produce a value
- Example: `const str = "23 is old";`

---

# Ternary Operator

**Ternary Operator** → Alternative way of writing an `if / else` statement

- Has three operands:
    1. A condition followed by a question mark `?`
    2. An expression to execute if the condition is truth, followed by a colon `:`
    3. An expression to execute if the condition is falsy

```jsx
const age = 23; 

age >= 18 
	? console.log("You can drive") // if 
	: console.log("Stay home!") // else 
```

---

# Backwards Compatibility

![Untitled](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%208.png)

**Backwards Compatibiliy** — Old JS code will run and work in a modern JS Engine 

- Older features are never removed

NOT forwards compatible 

- New JS code cannot run on an old JS Engine

---

# How to use Modern JavaScript today?

![**Note**: Users may not use a modern browser with a modern JS Engine — Code has to be transpiled back to ES5 for users. ](JavaScript%20Fundamentals%20Part%201%20f91fd0222bbb4e719d189268be46cced/Untitled%209.png)

**Note**: Users may not use a modern browser with a modern JS Engine — Code has to be transpiled back to ES5 for users. 

- ES5 can be used by all older browsers
- ES6+ is modern JavaScript