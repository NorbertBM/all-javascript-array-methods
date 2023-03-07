// TODO: some()

// ! The some() method checks if any of the elements in an array pass a test (provided as a function).

// Note: some() does not execute the function for array elements without values.

//* Syntax //

// array.some(function(currentValue, index, arr), thisValue)

// currentValue	Required. - The value of the current element
// index	Optional. - The array index of the current element
// arr	Optional. - The array object the current element belongs to

//? thisValue	is Optional.It is a value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

export const some = () => {
  console.log("some()");

  const numbers = [3, 10, 18, 20];

  // The some() method executes the function once for each element present in the array:

  // If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)

  // Otherwise it returns false
  // todo: lets create the tester function

  function checkOver18(numbers) {
    return numbers >= 18;
  }
  // now lets check if there is someone over 18 in our array of numbers
  console.log(numbers.some(checkOver18));

  //? Note: the  some() method does not change the original array.

  console.log(numbers); // the same array

  // todo: the short version using a arrow function looks like dis

  const checkGraterThenAge = (age) => numbers.some((number) => number >= age);
  const checkLesThenAge = (age) => numbers.some((number) => number <= age);

  let age;

  age = 20;
  console.log(checkGraterThenAge(age));
  console.log(checkLesThenAge(age));
};
