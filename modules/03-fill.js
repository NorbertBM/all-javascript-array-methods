// ! The fill() method fills the specified elements in an array with a static value.

export const fill = () => {
  console.log("fill");
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits);

  //? Note: this method overwrites the original array.

  fruits.fill("Kiwi");
  const fruitsFillKiwi = fruits.fill("Kiwi");
  console.log(fruits);

  // ! You can also specify the position of where to start and end the filling. If not specified, all elements will be filled.
  //todo:   array.fill(value, start, end)

  fruits.fill("Apple", 1, 3);
  const fruitsFillApple = fruits.fill("Apple", 1, 3);

  console.log(fruits);

  document.querySelector(".container").innerHTML = `
  
  
  
<h2 class="subtitle text-light " >  Fill ()</h2>


<div class="content" > 
<aside>

<p class="text-warning mb-1">The fill() method fills the specified elements in an array with a static value.</p>

<div class="card card-primary p-1" >

<pre>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);


fruits.fill("Kiwi");
console.log(fruits);



fruits.fill("Apple", 1, 3);
console.log(fruits);
</pre>

</div>

<div class="card card-success mt-1 p-1">

${fruits}

</div>


</aside>



<div>
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/GxboqF49xcs"
></iframe>
</div>



</div>

  
  
  `;
};
