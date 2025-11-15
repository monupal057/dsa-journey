// loops
//  for loops syntax
for (let i = 0; i < 5; i++){
    (intialization , condition, change)
    console.log();
}

//  print a Hello wrold 20 times. 
for (let i = 0; i < 20; i++){
    console.log("hello world")
}

// output Question 
// 1
for (let i = 3; i < 5; i++){
   console.log("hello world")
}

// 2
for (let i = 2; i < 9; i = i + 2){
    console.log("hello world")
}

// 3
for (let i = 5; i > 0; i--){
    console.log("hello world")
}

// infinte loop
for (let i = 1; i > 0; i++){
    console.log("hello world")
}

// using function or call function in loop
function hello() {
    console.log("Namaste")
}
for (let i = 0; i < 5; i++){
    hello()
}

// how Array And loop work together
//  fimd the lenth of given Array

let arr1 = [2, 4, 6, 8, 10, 11]
let length1 = arr.length
for (let i = 0; i < arr.length; i++){
    console.log(arr1[i])
}

let arr2= [3, 5, 6, 7, 3, 88, 9, 12]
let length = arr.length
for (let i = 0; i < arr.length; i++){
    console.log(arr2[i])
}

// print  all the even numbers in the array 

let arr3= [3, 5, 6, 7, 3, 88, 9, 12]
for (let i = 0; i <arr.length; i++){
    if (arr[i]% 2 == 0) {
        console.log(arr3[i])
    }
}

let arr4 = [4,5,66,34,31,18,91,63,57,88,90,92]
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        console.log(arr4[i])
    }
}

// print  all the even numbers in the array 

let arr = [4, 5, 66, 34, 31, 18, 91, 63, 57, 88, 90, 92]
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1) {
        console.log(arr[i])
    }
}

//  while loops
//  print hello world 5 times using while loops
let i = 0;
while (i < 10) {
    console.log("hello world")
    i++
}

let j = 0;
while (j < 8) {
    console.log("hello world")
    i++;
}