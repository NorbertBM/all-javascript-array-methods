// todo: isArray()

// ! The isArray() method determines whether an object is an array. This function returns true if the object is an array, and false if not.

//* Syntax //

// Array.isArray(obj)

export const isArray = () => {
  console.log("isArray()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  const verifyArray = Array.isArray(fruits);

  console.log(verifyArray);

  //   lets also do something more fancy

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];
  //todo: get all user ages
  const getUserNames = users.map((user) => user.name);
  //   console.log(getUserNames);

  const getUserAges = users.map((user) => user.age);
  //   console.log(getUserAges);

  const income = { Arabella: 200 + "$", Carina: 400 + "$", Norbert: 100 + "$" };

  const checkIfArray = (testArray) => {
    if (Array.isArray(testArray)) {
      console.log(`The elements ${testArray} are in an Array`);
    } else {
      console.log(`The elements ${testArray} are NOT in an Array`);
    }
  };
  checkIfArray(users);
  checkIfArray(getUserNames);
  checkIfArray(getUserAges);

  checkIfArray(income);
};
