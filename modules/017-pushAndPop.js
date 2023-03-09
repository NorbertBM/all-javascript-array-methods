// TODO: push()

// ! The push() method adds new items to the end of an array, and returns the new length.

// Note: The new item(s) will be added at the end of the array.

// Note: This method changes the length of the array.

// Tip: To add items at the beginning of an array, use the unshift() method.

//* Syntax //

// array.push(item1, item2, ..., itemX)

export const pushAndPop = () => {
  console.log("push()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi");

  console.log(fruits);

  const sortFruits = (newItem) => fruits.push(newItem);
  console.log(sortFruits("Prune"));
  console.log(fruits);

  //  Now lets also do something more fancy

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];

  // todo: create a function witch will add a new user to the existing array of users
  function addNewUser(addNewUser) {
    users.push(addNewUser);
  }

  //todo:  we will a initiate newUser variable with let because the value of the variable will constantly change

  let newUser;

  // todo: now we can create a new user by assigning to the variable a object with name, age and income and then pass the newUser in the addNewUser function
  newUser = { name: "Tony", age: 40, income: 700 };
  addNewUser(newUser);
  console.log(users);
  console.log(users.length);

  newUser = { name: "Anna", age: 23, income: 300 };
  addNewUser(newUser);
  console.log(users);
  console.log(users.length);

  //   TODO: pop()

  console.log("pop()");

  // ! The pop() method removes the last element of an array, and returns that element.

  //? Note: This method changes the length of an array.

  // Tip: To remove the first element of an array, use the shift() method.

  //* Syntax //

  // array.pop()

  //   todo: lets create a function witch will remove the last user from the users array
  function removeLastUser() {
    users.pop();
  }
  // * now you need to execute the function in order to remove a user from the users array

  console.log(removeLastUser());
  //? Note: this method will change the original array.
  console.log(users);
  //? Note: This method will also changes the length of the array.
  console.log(users.length);

  //   * each time you will execute the removeLastUser function the last user from the array of users will be removed
  console.log(removeLastUser());
  console.log(users);

  console.log(removeLastUser());
  console.log(users);

  users.toString();
  console.log(users);

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Push & Pop ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1"> The push() method adds new items to the end of an array, and returns the new length.</p>
    
  <p class="text-warning mb-1"> The pop() method removes the last element of an array, and returns that element.</p>
  
  <div class="card card-primary p-1" style="position:relative;">
  <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>
 
 <pre id="code">
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi");

  console.log(fruits);

  const sortFruits = (newItem) => fruits.push(newItem);
  console.log(sortFruits("Prune"));
  console.log(fruits);

  //  Now lets also do something more fancy

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];


  function addNewUser(addNewUser) {
    users.push(addNewUser);
  }

  let newUser;

  newUser = { name: "Tony", age: 40, income: 700 };
  addNewUser(newUser);
  console.log(users);
  console.log(users.length);

  newUser = { name: "Anna", age: 23, income: 300 };
  addNewUser(newUser);
  console.log(users);
  console.log(users.length);

  //   TODO: pop()

  console.log("pop()");



  //? Note: This method changes the length of an array.

  // Tip: To remove the first element of an array, use the shift() method.

  //* Syntax //

  // array.pop()

 
  function removeLastUser() {
    users.pop();
  }


  console.log(removeLastUser());
  //? Note: this method will change the original array.
  console.log(users);
  //? Note: This method will also changes the length of the array.
  console.log(users.length);


  console.log(users);

  console.log(removeLastUser());
  console.log(users);

  users.toString();
  console.log(users);
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
    src="https://www.youtube.com/embed/1tCJQQbTA6A"
  ></iframe>
  </div>
  
  
  </div>
  
  
    `;
};
