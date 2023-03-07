// TODO: includes()

//! The includes() method determines whether an array contains a specified element.

// This method returns true if the array contains the element, and false if not.

//* Syntax: //

// array.includes(element, start)

export const includes = () => {
  console.log("includes()");

  const names = ["Arabella", "Carina", "Norbert", "Laura"];

  function checkName(name) {
    return names.includes(name);
  }
  //? Note: The includes() method is case sensitive.
  console.log(checkName("Arabella"));
  console.log(checkName("norbert"));
  console.log(checkName("Tony"));

  // thinks become more complex when you need to seract in a array of objects, but dont worry, this is where the map() method comes is to play, and if you want to watch my javascript map method video it is in this siries of videos

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  const userNames = users.map((user) => {
    return user.name;
  });

  console.log(userNames);

  function checkUserName(userName) {
    if (userNames.includes(userName)) {
      console.log(`The user name: ${userName} was found`);
    } else {
      console.log(`The user name: ${userName} can not be found`);
    }
  }

  console.log(checkUserName("Arabella"));
  console.log(checkUserName("Tony"));
};
