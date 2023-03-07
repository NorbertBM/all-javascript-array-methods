// TODO: from()

//! The Array.from() method returns an Array object from any object with a length property or an iterable object.

//* Syntax: Array.from(object, mapFunction, thisValue);

export const from = () => {
  console.log("from");

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];
  //   todo: select a specific element from the array
  //   console.log(users[0].name);

  function findUser(position) {
    let userName = users[position].name;
    console.log(userName);
    return Array.from(userName);
  }

  console.log(findUser(0));

  // todo:  Short
  const getUserName = (position) => Array.from(users[position].name);

  console.log(getUserName(2));

  const getUserNameLetter = (position, letter) =>
    Array.from(users[position].name)[letter];

  console.log(getUserNameLetter(2, 0));
  console.log(getUserNameLetter(2, 3).toUpperCase());
};
