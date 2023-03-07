//! The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

// The findIndex() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)

// Otherwise it returns -1

//? Note: findIndex() does not execute the function for array elements without values.

//? Note: findIndex() does not change the original array.

// Syntax: array.findIndex(function(currentValue, index, arr), thisValue)

export const findIndex = () => {
  console.log("findIndex");

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  // tester function
  function testerFunction(array) {
    return array.age >= 30;
  }

  function findUser() {
    return users.findIndex(testerFunction);
  }

  console.log(findUser());

  // todo:  Short
  const getUser = () => users.findIndex((array) => array.age < 20);

  console.log(getUser());
};
