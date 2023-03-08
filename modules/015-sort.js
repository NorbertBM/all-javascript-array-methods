// todo: sort()

// ! The sort() method determines whether an object is an array. This function returns true if the object is an array, and false if not.

//* Syntax //

// Array.sort(obj)

export const sort = () => {
  console.log("sort()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  const sortFruits = fruits.sort();

  console.log(sortFruits);

  //  Now lets also do something more fancy

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];
  //todo: get all user ages
  const getUserNames = users.map((user) => user.name);
  //   console.log(getUserNames);

  const getUserAges = users.map((user) => user.age);
  //   console.log(getUserAges);

  const getUserIncomes = users.map((user) => user.income);

  const sortArray = (testArray) => {
    return console.log(testArray.sort());
  };
  sortArray(getUserNames);
  sortArray(getUserAges);
  sortArray(getUserIncomes);
};
