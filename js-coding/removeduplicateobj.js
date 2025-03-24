let data = [{ name: 'a' }, { name: 'c' }, { name: 'b' }, { name: 'a' }, { name: 'b' }, { name: 'c' }];

let uniqueNames = new Set();
let result = data.filter(item => {
    if (uniqueNames.has(item.name)) {
        return false;
    } else {
        uniqueNames.add(item.name);
        return true;
    }
});

console.log(result);


// ternary operator
let datas = [{ name: 'a' }, { name: 'c' }, { name: 'b' }, { name: 'a' }, { name: 'b' }, { name: 'c' }];

// Remove Duplicate Object
let uniqueName = new Set();
let results = datas.filter(item => uniqueName.has(item.name) ? false : (uniqueName.add(item.name), true));

console.log(results);


// Add the object in second line of the main array
const employee = [
    { name: "Rohan", age: 35, salary: 500 },
    { name: "John", age: 30 ,salary:300},
    { name: "sahil", age: 29 ,salary:200}
  ];
  
  const newEmployee = { name: "Alex", age: 30 };
  
  employee.splice(1, 0, newEmployee);
  
  console.log(employee);