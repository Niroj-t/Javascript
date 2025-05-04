/*
//Object Creation using object literals
let obj = {
    Name : "Niroj",
    Age : 22,
    greet:function(){
        console.log("Hello");
    }
};
console.log(obj);
obj.greet();
console.log(typeof(obj));

//object creation using new keyword
let student  = new Object();
    student.Fname = "Mahesh";
    student.age = 22;
    student.roll = 70;
    student.hobbies = ['Game','Music','Reading'];
    console.log(student);


//Using Object.create() method
let personPrototype = {
    name : "Niroj"
};
let person = Object.create(personPrototype);
console.log(person); 

//using constuctor
function CreateStudent(){
    
    this.firstName = "Niroj",
    this.lastName = "Thapa",
    this.age = 22

}
let student = new CreateStudent();
console.log(student);

//Dynamic object
let obj = {
    name : "Niroj",
    age : 20,
    height : 180
};
console.log(obj.age);
obj.color = "Red";//add value during run time
console.log(obj);

//object cloning using spread operator(...)
let src = {
    age : 20,
    name : "Niroj",
    height : 179
};
let des = {...src};
console.log("src:", src);
console.log("des:", des);

//object cloning using assign operator
let src1 = {
    age : 22,
    name : "Niroj",
    height : 185
};
let des1 = Object.assign({}, src1);
console.log("src:", src1);
console.log("des:", des1);

//object cloning using iteration
let src2 = {
    age : 22,
    name : "Niroj",
    height : 185
};
let des2 = {};
for(let key in src1){
    let newkey = key;
    let newvalue = src[key];
    des2[newkey] = newvalue;
}
console.log("src :", src2);
console.log("des:", des3);
*/

