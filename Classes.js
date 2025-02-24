//creating class
class student{
    //properties
    name = "Niroj";//public
    #age = 22;//private
    roll = 70;
    //behaviour
    study(){
        console.log("I am studying",this.#age);//accessing private member using this keyword
    }

}
const obj = new student();
console.log(obj.name);
obj.study();

//Getter and Setter
class GetSet{
    #msg = "Hello, Niroj";
    get msg(){
        return this.#msg;
    }
    set msg(val){
        this.#msg = `Hello,${val}`;
    }
}
const obj = new GetSet();
console.log(obj.msg);
obj.msg = "cake";
console.log(obj.msg);

//constructor 
class person{
    constructor(name){
        this.name = name;
    }
    intro(){
        console.log(`Hello this is me ${this.name}`);
    }
}
const obj = new person("Niroj");
obj.intro();


