// TODO: splice()

// ! The splice() method adds/removes items to/from an array, and returns the removed item(s).

//* Syntax //

// array.splice(index, howmany, item1, ....., itemX

export const splice = () => {
  console.log("splice()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // todo:  Add items to the array:
  fruits.splice(2, 0, "Kiwi");

  //? Note: This method changes the original array..
  console.log(fruits);

  // todo:  Remove items to the array:
  fruits.splice(2, 1);
  console.log(fruits);

  //  Now lets also do something more fancy

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];

  // todo: create a function witch will add a new user to the existing array of users in a specific position
  function addNewUser(position, numberOfUsers, addNewUser) {
    users.splice(position, numberOfUsers, addNewUser);
  }

  //todo:  we will  initiate newUser variable with let because the value of the variable will constantly change

  let newUser;

  // todo: now we can create a new user by assigning to the variable a object with name, age and income and then pass the newUser in the addNewUser function in the specific position.
  newUser = { name: "Tony", age: 40, income: 700 };

  addNewUser(1, 0, newUser);
  console.log(users);

  //todo: you can also delete the user
  addNewUser(1, 0);

  console.log(users);
  // todo: add two new users

  newUser = { name: "Anna", age: 23, income: 300 };

  console.log(users);
  console.log(users.length);

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Splice ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1"> The splice() method adds/removes items to/from an array, and returns the removed item(s).</p>
    


  <div class="card card-primary p-1" >
  
  <pre>
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  fruits.splice(2, 0, "Kiwi");

  //? Note: This method changes the original array..
  console.log(fruits);

 
  fruits.splice(2, 1);
  console.log(fruits);



  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];


  function addNewUser(position, numberOfUsers, addNewUser) {
    users.splice(position, numberOfUsers, addNewUser);
  }


  let newUser;


  newUser = { name: "Tony", age: 40, income: 700 };

  addNewUser(1, 0, newUser);
  console.log(users);


  addNewUser(1, 0);

  console.log(users);


  newUser = { name: "Anna", age: 23, income: 300 };

  console.log(users);
  console.log(users.length);
  
  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${users}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/Qz_qTDhZiMk"
  ></iframe>
  </div>
  
  
  </div>
  
  
    `;
};
