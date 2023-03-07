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
};
