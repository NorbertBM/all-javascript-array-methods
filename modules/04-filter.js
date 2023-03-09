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
    let filterBy = array.age > 18;
    return filterBy;
  }

  console.log(friends.filter(checkAdult));

  document.querySelector(".container").innerHTML = `
  
  
  

<h2 class="subtitle text-light" >  Filter ()</h2>

<div class="content" > 
<aside>

<p class="text-warning mb-1">The filter() method creates an array filled with all array elements that pass a test (provided as a function).</p>

<div class="card card-primary p-1" style="position:relative;">
 <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>

<pre id="code">

var ages = [32, 33, 16, 40];

  console.log(ages.filter(checkAdult));

  const friends = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 12 },
    { name: "Laura", age: 16 },
  ];

  function checkAdult(array) {
    let filterBy = array.age > 18;
    return filterBy;
  }

  console.log(friends.filter(checkAdult));

</pre>

</div>

<div class="card card-success mt-1 p-1">

${friends.filter(checkAdult).forEach((item) => item)}

</div>
</aside>



<div>
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/RIfnkmdItck"
></iframe>
</div>



</div>

  
  
  `;
};
