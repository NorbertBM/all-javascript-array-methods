// todo: reduce()

// ! The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). Also, the return value of the function is stored in an accumulator (result/total).

// Note: reduce() does not execute the function for array elements without values. This method does not change the original array.

//* Syntax //
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

export const reduce = () => {
  console.log("reduce()");

  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];
  const usersIncome = users.map((user) => user.income);

  // todo: create the reducer callback function for the total amount of income
  const getTotalIncome = (total, num) => {
    return total + num;
  };
  console.log(usersIncome.reduce(getTotalIncome, 0));

  // todo: now lets get the average age of the users
  const usersAge = users.map((user) => user.age);
  // console.log(usersAge);

  // todo: create the reducer callback function
  const getTotal = (total, num) => {
    return total + num;
  };
  const getAverage = (array) => {
    return array.reduce(getTotal, 0) / array.length;
  };
  console.log(getAverage(usersAge));
  console.log(getAverage(usersIncome));

  document.querySelector(".container").innerHTML = `
  
  
  <h2 class="subtitle text-light" >  Reduce ()</h2>
  
  <div class="content" > 
  <aside>
  
  <p class="text-warning mb-1">The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). Also, the return value of the function is stored in an accumulator (result/total).</p>
  
  <div class="card card-primary p-1" style="position:relative;">
  <button  class="btn btn-sm btn-primary btn-clipboard" >&#128203</button>
 
 <pre id="code">
  
  const users = [
    { name: "Arabella", age: 20, income: 400 },
    { name: "Carina", age: 16, income: 300 },
    { name: "Norbert", age: 35, income: 500 },
    { name: "Laura", age: 14, income: 800 },
  ];
  const usersIncome = users.map((user) => user.income);

  // todo: create the reducer callback function for the total amount of income
  const getTotalIncome = (total, num) => {
    return total + num;
  };
  console.log(usersIncome.reduce(getTotalIncome, 0));

  // todo: now lets get the average age of the users
  const usersAge = users.map((user) => user.age);
  // console.log(usersAge);

  // todo: create the reducer callback function
  const getTotal = (total, num) => {
    return total + num;
  };
  const getAverage = (array) => {
    return array.reduce(getTotal, 0) / array.length;
  };
  console.log(getAverage(usersAge));
  console.log(getAverage(usersIncome));
  </pre>
  
  </div>
  <div class="card card-success mt-1 p-1">
  
  ${getAverage(usersIncome)}
  
  </div>
  </aside>
  
  
  <div>
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/8irSCd6wL0Q"
  ></iframe>
  </div>
  
  
  </div>
  
  
    `;
};
