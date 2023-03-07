// ! The filter() method creates an array filled with all array elements that pass a test (provided as a function).

//? Note: filter() does not execute the function for array elements without values and filter() does not change the original array.

export const filter = () => {
  console.log("filter");

  var ages = [32, 33, 16, 40];

  console.log(ages.filter(checkAdult));

  const friends = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 12 },
    { name: "Laura", age: 16 },
  ];

  function checkAdult(array) {
    let filterBy = array.age > 14;
    return filterBy;
  }

  console.log(friends.filter(checkAdult));
};
