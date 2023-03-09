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
  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  IndexOf ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The indexOf() method searches the array for the specified item, and returns its position.</p>
  
  <div class="card card-primary p-1" >
  
  <pre>
  
  
  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  const userNames = users.map(function (user) {
    return user.name;
  });

  console.log(userNames);

  // todo: short
  const userAges = users.map((user) => user.age);

  console.log(userAges);

  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${reverseCheck("Norbert")}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/ygQoN0MHAUQ"
  ></iframe>
  </div>
  
  
  </div>
  
  
    
    `;
};
