// TODO: unshift()

// ! The unshift() method adds new items to the beginning of an array, and returns the new length.

// Tip: To add new items at the end of an array, use the push() method. Witch I covered in my push and pop video!

//* Syntax //

// array.unshift(item1, item2, ..., itemX)

export const shiftAndUnshift = () => {
  console.log("unshift()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Kiwi");

  console.log(fruits);
  //? Note: This method changes the length of an array.
  console.log(fruits.length);

  const sortFruits = (newItem) => fruits.unshift(newItem);
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
    users.unshift(addNewUser);
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

  console.log("shift()");

  // !The shift() method removes the first item of an array. And The return value of the shift method is the removed item.

  // Tip: To remove the last item of an array, use the pop() method. Witch I also covered in my push and pop video!

  //* Syntax //

  // array.shift()

  //   todo: lets create a function witch will remove the first user from the users array
  function removeFirstUser() {
    users.shift();
  }
  // * now you need to execute the function in order to remove a user from the start of the users array

  console.log(removeFirstUser());
  //? Note: this method will change the original array.
  console.log(users);
  //? Note: This method will also changes the length of the array.
  console.log(users.length);

  //   * each time you will execute the removeFirstUser function the First user from the array of users will be removed
  console.log(removeFirstUser());
  console.log(users);

  console.log(removeFirstUser());
  console.log(users);

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Shift & Unshift ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1"> The unshift() method adds new items to the beginning of an array, and returns the new length.</p>
    
  <p class="text-warning mb-1"> The shift() method removes the first item of an array. And The return value of the shift method is the removed item.</p>

  <div class="card card-primary p-1" >
  
  <pre>
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Kiwi");

  console.log(fruits);
  //? Note: This method changes the length of an array.
  console.log(fruits.length);

  const sortFruits = (newItem) => fruits.unshift(newItem);
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
    users.unshift(addNewUser);
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

  //   TODO: shift()

  console.log("shift()");


  //* Syntax //

  // array.shift()


  function removeFirstUser() {
    users.shift();
  }


  console.log(removeFirstUser());
  //? Note: this method will change the original array.
  console.log(users);
  //? Note: This method will also changes the length of the array.
  console.log(users.length);

  console.log(removeFirstUser());
  console.log(users);

  console.log(removeFirstUser());
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
    src="https://www.youtube.com/embed/L1IHrTLb2vM"
  ></iframe>
  </div>
  
  
  </div>
  
  
    `;
};
