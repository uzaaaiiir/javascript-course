# How JavaScript Works Behind the Scenes

# What is JavaScript?

## JavaScript

![Untitled](How%20JavaScript%20Works%20Behind%20the%20Scenes%2029577905db014233a4d8e271f81e833a/Untitled.png)

---

## JavaScript: Revisited Definition

<aside>
⭐ `JavaScript` is a High-Level, Prototype-Based, Object Oriented, Multi-Paradigm, Interpreted or Just-In Time Compiled, Dynamic, Single-Threaded, Garbage-Collected, Programming Language with First-Class Functions and a Non-Blocking Event Loop Concurrency Model.

</aside>

---

## Deconstructing the Definition

### High-Level

Any Computer needs resources to perform tasks.

- `Low-Level` — Developer has to manage resources manually
- `High-level` — Developer does NOT have to worry about resources, automatically managed
    - Do not have to manage resources
    - Have Abstractions
    - Will never be as fast/optimized as low-level languages

### Garbage-Collected

JavaScript Engine automatically allocates memory when objects are created and frees it when they are not used anymore (******************garbage collection******************). 

`Garbage-Collection` — Algorithm in JS Engine that automatically removes old-unused objects

- Prevents accumulation in memory
- Collects objects that have no references pointing to it

---

### Interpreted or Just-In-Time Compiled Language

To execute a program, ***********Source code*********** must be converted into ************Machine Code************ which is written in Binary

- JS is human readable code & needs to be converted to Machine Code

2 Ways to Translate Code: `Compiler` or `Interpreter`

`Compiler` — Compiles the entire source code before running it. 

`Interpreter` — Converts the Source Code to Machine code one line at a time and executes the program.

`Just-In-Time Compilation` — Compiles the program at Run-Time and runs it. 

### Multi-Paradigm

****************Paradigm**************** — An approach and mindset of structuring code, which will direct your coding style and technique 

1️⃣ `**Procedural Programming` —** Organizing code as insturctions that tells the ocmputer what to do step-by-step (Procedures)

2️⃣ **********************************************************************`Object-Oriented Programming (OOP)`**********************************************************************

3️⃣ ********************************************************`Functional Programming (FP)`********************************************************

2 Types of Paradigms: (1) Imperative and (2) Declarative 

---

### Prototype-Based Object-Oriented Language

### First-Class Functions

---

### Dynamic

### Single-Threaded