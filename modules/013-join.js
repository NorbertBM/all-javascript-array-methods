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

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Join ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The join() method returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,).</p>
  
  <div class="card card-primary p-1" style="position:relative;">
  <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>
 
 <pre id="code">
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  let joinElements = fruits.join();
  joinElements = fruits.join("");
  joinElements = fruits.join(" ");
  joinElements = fruits.join(" and ");
  joinElements = fruits.join(" & ");

  console.log(joinElements);

  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${joinElements}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/SCORMkfbI6w"
  ></iframe>
  </div>
  
  
  </div>
  
  
    `;
};
