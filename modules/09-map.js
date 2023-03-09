// TODO: map()

//! The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

//? Note: map() does not execute the function for array elements without values. And this method does not change the original array.

//* Syntax: //

// array.map(function(currentValue, index, arr), thisValue)

export const map = () => {
  console.log("map()");

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  const userNames = users.map(function (user) {
    return user.name;
  });

  console.log(userNames);

  // todo: short
  const userAges = users.map((user) => user.age);

  console.log(userAges);

  document.querySelector(".container").innerHTML = `
  
  
  

  <h2 class="subtitle text-light" >  Map ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The map() method creates a new array with the results of calling a function for every array element.</p>
  
  <div class="card card-primary p-1" style="position:relative;">
 <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>

<pre id="code">
  
  
  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  const userNames = users.map(function (user) {
    return user.name;
  });

  console.log(userNames);

  // todo: short
  const userAges = users.map((user) => user.age);

  console.log(userAges);

  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${userAges}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/cINWCy0eWD8"
  ></iframe>
  </div>
  
  
  </div>
  
  
    
    `;
};
