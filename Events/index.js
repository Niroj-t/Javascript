/*
function ChangeText(event){
    console.log(event);//Event Object
let para1 = document.getElementById('para1');
para1.textContent = "Hello Niroj"
}
let para1 = document.getElementById('para1');
para1.addEventListener('click',ChangeText); //event listner added

//para1.removeEventListener('click', ChangeText);

//Default Action changed
let anchorElement = document.getElementById('fancher');

anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent = "click me Bro";
});
//Add listener
let paras = document.querySelectorAll('p');
 function alertpara(event){
    alert("You clicked" + event.target.textContent);//add target properties
}
for(let i=0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertpara);
}
//add listener in div
let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertpara);
*/