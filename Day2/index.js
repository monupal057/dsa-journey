// function
function printHello() {
    console.log("hello everyone");
}
printHello();

// function
function greet() {
    console.log("AKshay", "" + "name");
}
greet("name");
// Addition of two numbers

function sum(a, b) {
    let add = a + b;
    console.log(add);
}
sum(10, 8);

//  Multipication of two number

function Multy(c, d) {
    let Multi = c * d;
    console.log(Multi);
}
Multy(7, 9);

// the funcion of square

function square(x) {
    let result = x * x;
    return result;
}
let value = square(24);
console.log(value); 

// if-else loops

//  create a function for which accept the age and tells whether a person is eligible to vote or not

function eligibletoVote(age) {
    if (age < 18) {
        console.log("not eligible to vote")
    }
    else {
        console.log("eligible to vote");
    }
}
eligibletoVote(37);

function eligibletoVote(age) {
    if (age < 18) {
        console.log("not eligible to vote")
    }
    else {
        console.log("eligible to vote");
    }
}
eligibletoVote(16);

//  loops
// create function to check if a number is even or odd

function isEvenOdd(num) {
    if (num % 2) {
        console.log("even");
    }
    else {
        console.log("Odd");
    }
}
isEvenOdd(9);


function isEvenOdd(num) {
    if (num % 2) {
        console.log("even");
    }
    else {
        console.log("Odd");
    }
}
isEvenOdd(61);