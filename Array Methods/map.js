
//Example 1
let arr = [1,2,3,4];
let newArr = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 1;
})
console.log(typeof(newArr));

//Example 2
let product = [
    {id: 2, name:'Mobile'},
    {id: 3, name:'Laptop'}
];
let ProductName = product.map(p=>p.name);
console.log(ProductName);