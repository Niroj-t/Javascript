
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(322);
        }, 5000);
    })
}

//get data
async function getData() {
  // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {//post data
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  console.log(data);
  return 355;
}
async function main() {
  console.log("LOding Module");

  console.log("Load data");

  let data = await getData();
  console.log(data);

  console.log("Process Data");
}
main();
