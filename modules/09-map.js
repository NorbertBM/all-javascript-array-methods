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
};
