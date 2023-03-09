// TODO: includes()

//! The includes() method determines whether an array contains a specified element.

// This method returns true if the array contains the element, and false if not.

//* Syntax: //

// array.includes(element, start)

export const includes = () => {
  console.log("includes()");

  const names = ["Arabella", "Carina", "Norbert", "Laura"];

  function checkName(name) {
    return names.includes(name);
  }
  //? Note: The includes() method is case sensitive.
  console.log(checkName("Arabella"));
  console.log(checkName("norbert"));
  console.log(checkName("Tony"));

  // thinks become more complex when you need to seract in a array of objects, but dont worry, this is where the map() method comes is to play, and if you want to watch my javascript map method video it is in this siries of videos

  const users = [
    { name: "Arabella", age: 20 },
    { name: "Carina", age: 16 },
    { name: "Norbert", age: 35 },
    { name: "Laura", age: 14 },
  ];

  const userNames = users.map((user) => {
    return user.name;
  });

  console.log(userNames);

  function checkUserName(userName) {
    if (userNames.includes(userName)) {
      console.log(`The user name: ${userName} was found`);
    } else {
      console.log(`The user name: ${userName} can not be found`);
    }
  }

  console.log(checkUserName("Arabella"));
  console.log(checkUserName("Tony"));

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Includes ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The includes() method determines whether an array contains a specified element.</p>
  
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
  
  ${checkUserName("Tony")}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/sFABdbvNbZ4"
  ></iframe>
  </div>
  
  
  </div>
  
  
    
    `;
};
