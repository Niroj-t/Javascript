
//if-else statement
let age  = 16;
if(age > 19){
    console.log("You are an adult");
}
else{
    console.log("You are a teenager");
}

//if-else-if statement
let num = 5;
if(num > 0){
    console.log("positive");
}
else if(num < 0){
    console.log("Negative")
}
else{
    console.log("Zero")
}

//nested statement
let num = 5;
let age = 19;
if(num == 5){
    if(age > 18){
        console.log("You can vote");
    }
    console.log("Hello");
}

//switch statement
let num  = 2;
switch(num){
    case 1:
        console.log("Bimal");
        break;
    case 2:
        console.log("Niroj");
        break;
    case 3:
        console.log("Anup") ;
        break;
    case 4:
        console.log("Ananta") ;
        break;
    default:
        console.log("Error");

}
