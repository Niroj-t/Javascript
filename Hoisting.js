//Function Hoisting
SayHello("Hello");
function SayHello(string){
    console.log(string);
}

//Variable Hoisting
console.log(age);
var age = 20;//only variable declaration is shift not value

//The let and const Keywords
console.log(FullName);
let FullName = "Niroj"; //it gives reference error

console.log(age);
let age = 22; ////it gives reference error


