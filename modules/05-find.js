// !The find() method returns the value of the first element in an array that pass a test (provided as a function).

// The find() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)

// Otherwise it returns undefined
//? Note: find() does not execute the function for empty arrays.

//? Note: find() does not change the original array.

export const find = () => {
  console.log("find");

  const friends = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 12 },
    { name: "Laura", age: 16 },
  ];
  //todo:   find conditions:

  function findMinor(array) {
    return array.age < 18;
  }
  function findAdult(array) {
    return array.age >= 18;
  }
  console.log(friends.find(findMinor));
  console.log(friends.find(findAdult));

  document.querySelector(".container").innerHTML = `
  
  
  

<h2 class="subtitle text-light" >  Find ()</h2>

<div class="content" > 
<aside>

<p class="text-warning mb-1">The find() method returns the value of the first element in an array that pass a test (provided as a function). </p>

<div class="card card-primary p-1" >

<pre>

const friends = [
  { name: "Arabella", age: 20 },
  { name: "Carina", age: 12 },
  { name: "Laura", age: 16 },
];

//todo:   find conditions:

function findMinor(array) {
  return array.age < 18;
}
function findAdult(array) {
  return array.age >= 18;
}
console.log(friends.find(findMinor));
console.log(friends.find(findAdult));

</pre>

</div>
<div class="card card-success mt-1 p-1">

${friends.find(findAdult).name}

</div>
</aside>


<div>
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/jh5n7WQMiEg"
></iframe>
</div>


</div>


  
  `;
};
