export function concat() {
  console.log("contact");
  const person = ["First Name", "Last Name"];
  const info = ["Emil", "Age", "Address"];
  const personalInfo = person.concat(info);
  console.log(personalInfo);

  const addressDetail = personalInfo.concat("City", "Street");
  console.log(addressDetail);

  document.querySelector(".container").innerHTML = `
  
  <h2 class="subtitle text-light " >  Concat ()</h2>


<div class="content" > 
<aside >

<p class="text-warning mb-1">The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. </p>

<div class="card card-primary p-1" >

<pre>
const person = ["First Name", "Last Name"];
const info = ["Emil", "Age", "Address"];
const personalInfo = person.concat(info);

console.log(personalInfo);


const addressDetail = personalInfo.concat("City", "Street");
console.log(addressDetail);
</pre>

</div>

<div class="card card-success mt-1 p-1">

${addressDetail}

</div>

</aside>



<div>
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/sDq06m-aKFw"
></iframe>
</div>



</div>

  
  
  `;
}
