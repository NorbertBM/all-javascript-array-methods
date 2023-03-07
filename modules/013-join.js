// todo: join()

// ! The join() method returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,).

//? Note: this method will not change the original array.

//* Syntax //
// array.join(separator)

export const join = () => {
  console.log("join()");

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  let joinElements = fruits.join();
  joinElements = fruits.join("");
  joinElements = fruits.join(" ");
  joinElements = fruits.join(" and ");
  joinElements = fruits.join(" & ");

  console.log(joinElements);
};
