// todo: reverse()

// ! The reverse() method reverses the order of the elements in an array.

//* Syntax //

// Array.reverse(obj)

export const reverse = () => {
  console.log("reverse()");
  // * if we take our example of array of fruits by creating a variable with const...
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // now we can reverse the array by apllaying the reverse method to it.
  const reverseFruits = fruits.reverse();

  //? You should Note that this method changes the original array.
  console.log(reverseFruits);

  //  Now lets applie the reverse method to our users array by

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Laura", age: 14, income: 800 },
  ];

  //todo: get all user ages
  const getUserNames = users.map((user) => user.name);
  //   console.log(getUserNames);

  const getUserAges = users.map((user) => user.age);
  console.log(getUserAges);

  const getUserIncomes = users.map((user) => user.income);

  //   const reverseArray = (testArray) => {
  //     return console.log(testArray.reverse());
  //   };
  // you could also aplie the sort() method to it and get a  to z and 0 to inf values

  const reverseArray = (testArray) => {
    return console.log(testArray.reverse().sort());
  };

  reverseArray(getUserNames);
  reverseArray(getUserAges);
  reverseArray(getUserIncomes);
};
