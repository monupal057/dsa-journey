/* =======================================================
   📘 Basic JavaScript Notes by Monu Pal
   -------------------------------------------------------
   This file is like your mini JavaScript notebook!
   It includes small concepts explained in plain words
   + code examples to help you understand and revise easily.
   Topics inside 👇
     ✅ Printing output (console.log)
     ✅ let vs const
     ✅ Basic math operations
     ✅ String concatenation
     ✅ Arrays & accessing data
   ======================================================= */


/* 🟢 1. PRINTING OUTPUT (console.log)
   ---------------------------------------------------
   - `console.log()` is used to print things on screen.
   - It helps to check what your code is doing.
   --------------------------------------------------- */
console.log("Hello World 👋"); // Output: Hello World 👋


/* 🟢 2. VARIABLES (let and const)
   ---------------------------------------------------
   - `let` is for values that can change later.
   - `const` is for values that stay the same always.
   --------------------------------------------------- */
let a = 10;
console.log(a); // Output: 10

const x = 20;
const y = 30;


/* 🟢 3. BASIC MATH OPERATIONS
   ---------------------------------------------------
   - You can do simple maths with JavaScript operators:
       ➕ Addition (+)
       ➖ Subtraction (-)
       ✖️ Multiplication (*)
       ➗ Division (/)
   --------------------------------------------------- */
const sum = x + y;          // Adds two numbers
const multiply = x * y;     // Multiplies them
const division = x / y;     // Divides them
const difference = x - y;   // Subtracts one from another

console.log("Sum:", sum);               // 50
console.log("Multiply:", multiply);     // 600
console.log("Division:", division);     // 0.666...
console.log("Difference:", difference); // -10


/* 🟢 4. STRINGS & CONCATENATION
   ---------------------------------------------------
   - Strings are basically text written inside quotes.
   - You can join two strings using the + operator.
   - Example: joining first name + last name
   --------------------------------------------------- */
let firstName = "Monu";
let lastName = "Pal";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: Monu Pal


/* 🟢 5. STRINGS + NUMBERS
   ---------------------------------------------------
   - If you add a string and a number, JS turns number into string.
   - So, it just joins both like text.
   --------------------------------------------------- */
let firsName = "Monu";
let lasName = "7";

let endName = firsName + " " + lasName;
console.log("Mixed Name:", endName); // Output: Monu 7


/* 🟢 6. ARRAYS - COLLECTION OF VALUES
   ---------------------------------------------------
   - Arrays store multiple values in one variable.
   - You can access items using their index (starting from 0).
   --------------------------------------------------- */
let arr = [10, 20, 30, 40, 50]; // Numbers array
let arr1 = ["Monu", "Pal", "Sachin", "Sharma"]; // Strings array

console.log("4th person in arr1:", arr1[3]); // Output: Sharma
console.log("2nd number in arr:", arr[1]);   // Output: 20


