/*
let firstPromise = new Promise(( resolve, reject) => {
    console.log("Niroj");
    resolve(1000);
    reject(new Error("Error Occured"));
});

//Asynchronous Code
//example 1
function SayHello(){
    console.log("Hello,this is Niroj");
}

setTimeout(SayHello, 10000);
//exmaple 2
let firstPromise = new Promise(( resolve, reject) => {
   setTimeout(function SayHello(){
    console.log("Hello, this is me");
   },10000);
   // resolve(1000);
});

let promise1 = new Promise((resolve, reject)=>{
    let success = false;//true;
    if(success){
        resolve("Promise Fullfilled");
    }
    else{
        reject("Promise Rejected");
    }
});
//use then and catch block
promise1.then((message) =>{
    console.log("The Message is " +message);
}).error((error)=>{
    console.log("Error is"+error)
}).catch((error)=>{
    console.log(error);
});
*/
//Multiple Promises
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000,"Hello 1");
})
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 8000,"Hello 2");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 10000,"Hello 3");
})
/*
//used for error catch
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(reject, 12000,"Hello 4");
})*/
Promise.all([promise1,promise2,promise3])
//Promise.all([promise4,promise3,promise2,promise1])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("Error "+error);
})
