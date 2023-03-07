// TODO: indexOf()

//! The indexOf() method searches the array for the specified item, and returns its position.

// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.

//* Syntax: //

// array.indexOf(item, start)

export const indexOf = () => {
  console.log("indexOf()");

  const names = ["Arabella", "Carina", "Norbert", "Laura", "Norbert"];

  function checkName(name) {
    return names.indexOf(name);
  }
  //? Note: The first item has position 0, the second item has position 1, and so on.
  console.log(checkName("Arabella"));

  //? If the item is present more than once, the indexOf method returns the position of the first occurence.
  console.log(checkName("Norbert"));

  //? Returns -1 if the item is not found.
  console.log(checkName("Tony"));

  //? Tip: If you want to search from end to start, use the lastIndexOf() method

  function reverseCheck(name) {
    return names.lastIndexOf(name);
  }
  console.log(reverseCheck("Norbert"));
};
