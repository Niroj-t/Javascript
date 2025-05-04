/*
//creating variables using 'var'
var x=25;
console.log(x);
//example of function scoped
function demo()
{
    var name = "Niroj";
    console.log(name);//function scoped
}
demo();
console.log(name); //throw error

//re-definition using var
var x = 20;
var y = 30;

//creating variables using 'let'
let y = 10;
console.log(y);

{
let y = 5;
console.log(y);//blocked scope
}
console.log(y); // throw error

//re-definition using let
let y = 2;
let y = 3;
console.log(y); // throw eeror

let string = 'Niroj';
string = '25';
console.log(string);

creating variables using 'const'
const roll=30;
console.log(roll);

value not changed
const age = 40;
age = 40;
console.log(age); // throw error
*/