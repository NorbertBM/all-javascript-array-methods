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
};
