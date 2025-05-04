
//Example 1
let arr=[1,2,3,4];
let arr2 = arr.reduce((sum,num)=>{
    return sum+num;
})
console.log(arr2);
    
//Example 2
const cart = [
    {item:'watch',price:1500},
    {item:'Pen',price:10},
    {item:'Book',price:450},
    {item:'T-Shirt',price:1200}
];
const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total);