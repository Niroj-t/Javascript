//Function Definition
function SayHello(){
    console.log("Hello");
}
SayHello();//Function Call

function PrintCounting(){
    for(let i=1;i<5;i++){
        console.log(i);
    }
}
PrintCounting();

//parameter pass
function Myname(name){
    console.log(name);
}
Myname("Niroj");

//Calculate Average 
function getavg(num1, num2){
  let Average = (num1+num2)/2;
  console.log("Average is " +Average);
}
getavg(7,5);

//Return Function
function Sum(num1,num2,num3){
    return (num1+num2+num3);
}
let result = Sum(5,4,1);
console.log("Sum is " +result);

function Name(firstname, lastname){
    let FullName = firstname+ " "+lastname;
    return FullName;
    //unreachable statement
    let a= 5;
    console.log(a);
}
let GetName = Name("Niroj","Thapa");
console.log("Your Full Name is " +GetName);

//Function Expression
const GetName = function(name){
    return `helo, ${name}`;
}
let ans = GetName("Niroj");
console.log(ans);

//Arrow Function
const GetExpo = (x,y) =>{ //used for short and anonymous functions
    return (x**y);
}
console.log(GetExpo(2,3));

//returning fuunction
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));

//function callback
function GreetMe(greet,name){
    console.log("Hello", name);
    greet();
}

function greet(){
    console.log("Namaskar K xa khabar");
}
GreetMe(greet, "Niroj");

//returing functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));