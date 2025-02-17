//creation of string
let String = "Java";
console.log(String);

let firstName = 'Niroj';
console.log(typeof(firstName));

let Myname = `Niroj 
Thapa`;
console.log(Myname);

let firstname = new String("Hello");
console.log(firstname);

let str1 = "Hello";
let str2 = "World";
//let add = str1 + str2;//using + operator
//console.log(add);
//let FinalAns = `${str1}${str2}`;//using template literals{}
//console.log(FinalAns);
console.log(str1.length);//String length
console.log(str1.toUpperCase());//lower to uppercase

//substring method
let str = "Hello";
console.log(str.substring(2,4));
//console.log(str.substring(4));

//split method
let str = "Hi how are you";
let word = str.split(' ');
console.log(word);
