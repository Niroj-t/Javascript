
//Example 1
let arr = [8,15,6,30,2,54,19];
let filterArray = arr.filter((value)=>{
    return value>15;
})
console.log(filterArray);

//Example 2
const users= [
    {name:'Niroj',online: true},
    {name:'Bimal',online: true},
    {name:'Ram',online: false},
    {name:'Hari',online: true}
];
const OnlineUsers = users.filter(user=>user.online);
console.log(OnlineUsers);