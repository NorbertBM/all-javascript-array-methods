// TODO: forEach()

//! The forEach() method calls a function once for each element in an array, in order.

//? Note: the function is not executed for array elements without values.

//*  Syntax: array.forEach(function(currentValue, index, arr), thisValue);

export const forEach = () => {
  console.log("forEach");

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  // todo:with regular callback function
  const getUser = () =>
    users.forEach(function (element) {
      console.log(element);
    });
  console.log(getUser());

  // todo:  with arrow function
  users.forEach((element) => console.log(element));

  users.forEach((element, index) => {
    console.log(index + " " + element.name);
    console.log(element.age);
  });

  const getUserNames = users.forEach((element) => element.name);

  document.querySelector(".container").innerHTML = `
  

  <h2 class="subtitle text-light" >  forEach ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The forEach() method calls a function once for each element in an array, in order.</p>
  
  <div class="card card-primary p-1" style="position:relative;">
  <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>
 
 <pre id="code">
  
  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  // todo:with regular callback function
  const getUser = () =>
    users.forEach(function (element) {
      console.log(element);
    });
  console.log(getUser());

  // todo:  with arrow function
  users.forEach((element) => console.log(element));

  users.forEach((element, index) => {
    console.log(index + " " + element.name);
    console.log(element.age);
  });
  
  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${getUserNames}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/UNy4mj9T6K8"
  ></iframe>
  </div>
  
  
  </div>
    
    
    `;
};
