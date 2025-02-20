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


