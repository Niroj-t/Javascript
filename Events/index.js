
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