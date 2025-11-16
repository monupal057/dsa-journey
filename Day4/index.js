// 1. write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.


let arr = [4, 2, 0, 10, 8, 30]
function searchElement(arr, x) {
    let length = arr.length;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}
let result = searchElement(arr, 8);
console.log(result);


// for retrun -1
let arr1 = [4, 2, 0, 10, 8, 30]
function searchElement(arr1, x) {
    let length = arr1.length;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] == x) {
            return i;
        }
    }
    return -1;
}
let result = searchElement(arr1, 79);
console.log(result);


// 2. write a function that returns the number of negative numbers in an array.

let arr = [2, -9, 17, 4, -6, -9, -11, -7, 8]
function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
let res = countNegative(arr);
console.log(res);


// 3.write a function that returns the largest number in an array.

let arr = [5, 10, 3, 6, 7, 10,17, 1]
function findLargest(arr) {
    let largest = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest =arr[i]
        }
    }
    return largest;
}
let res = findLargest(arr)
console.log(res);

// 4.write a function that returns the smallest number in an array.

let arr = [5, 10, 3, 6, 7, 10,17, 1]
function findSmallest(arr) {
    let Smallest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < Smallest){ 
         Smallest = arr[i]
    }
}
return Smallest;
}
let res = findSmallest(arr)
console.log(res);