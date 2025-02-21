/*
//Array Literal Notation[]
//Creating an array of numbers using array literal notation
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings using array literal notation
const fruits = ['apple', 'banana', 'orange'];

// Creating an array of mixed data types using array literal notation
const mixed = [1, 'apple', true, { name: 'John' }];

//output
console.log(numbers);
console.log(fruits);
console.log(mixed);

//Array Constructor
// Creating an array of numbers using Array constructor
const age = new Array(22, 45, 68, 16 ,19);

// Creating an array of strings using array literal notation
const colours = new Array('Red', 'Blue', 'Pink');

// Creating an empty array using Array constructor
const emptyArray = new Array();

//Output
console.log(age);
console.log(colours);
console.log(emptyArray);

//Accessing Array Elements
const tu = ['iost', 'ioe', 'iom', 'mgmt'];
// Accessing the third element of the array
console.log(tu[2]);
// Accessing an element using a variable
const index = 3;
console.log(tu[index]);

//Insertion in Array
const courses = ['BIT', 'CSIT', 'BCA'];
//Insertion at end
courses.push('BBS');
console.log(courses);

//Insertion at start
courses.unshift('BCIS');
console.log(courses);

//Insertion at Random Index using splice method
courses.splice(1, 0, 'BBA');
console.log(courses);

//slice method
const arr = [4, 8, 'loop', 30, true, 50];
console.log(arr.slice(2,4) );

//Map Method
const arr = [10, 20, 30];
arr.map((number,index) =>
{
    console.log(number);
    console.log(index);
})

//Filter Method
//Example 1
let array = [3, 4, 9, 6, 12, 16, 13];
let ans = array.filter((number) =>{
   return (number%2 ===0);
})
console.log(ans);

//Example 2
let arr = [3,'Patan', true, 20, 'Ilam'];
let ans = arr.filter((value) =>{
    if(typeof(value) === 'string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);

//sorting
let arr = [3,1,5,4,9,6,8];
arr.sort();
console.log(arr);

//foreach loop
let arr = [10,20,30,40];
arr.forEach((value,index) =>{
    console.log("NUmber:", value, "index:", index);
})

//for-in loop
let obj = {
    Name : "Niroj",
    Age : 22,
    greet:function(){
        console.log("Hello");
    }
};
for(let key in obj){
    console.log( key," ", obj[key]);
}

//for-of loop
let fullname = "Niroj";
for(let val of fullname){
    console.log(val);
}
*/
//sum of array
let arr = [10, 15, 20, 55, 90];
function getSum(arr){
   let len = arr.length;
    let sum = 0;
    for(let index = 0; index < len; index++){
        sum= sum+ arr[index];
    }
    return sum;
}
let totalsum = getSum(arr);
console.log(totalsum);
