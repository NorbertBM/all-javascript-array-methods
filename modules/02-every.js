//! The every() method checks if all elements in an array pass a test (provided as a function).

// !The every() method executes the function once for each element present in the array:

//! If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)

//! If no false occur, every() returns true

//? Note: every() does not execute the function for array elements without values.

//? Note: every() does not change the original array

export const every = () => {
  console.log("every");

  const ages = [32, 33, 16, 40];

  function checkAge(age) {
    // return age >= 10; // true
    // return age <= 39; // false
    return age >= 18; // false
  }

  console.log(ages.every(checkAge));

  document.querySelector(".container").innerHTML = `
  
  
  

<h2 class="subtitle text-light" >  Every ()</h2>

<div class="content" > 
<aside>

<p class="text- mb-1">The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.  </p>

<div class="card card-primary p-1" style="position:relative;">
 <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>

<pre id="code">
const ages = [32, 33, 16, 40];

function checkAge(age) {
  // return age >= 10; // true
  // return age <= 39; // false
  return age >= 18; // false
}

console.log(ages.every(checkAge));
</pre>

</div>
<div class="card card-success mt-1 p-1">

${ages.every(checkAge)}

</div>

</aside>



<div>
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/vB00bE5HdbI"
></iframe>
</div>



</div>

  
  
  `;
};
