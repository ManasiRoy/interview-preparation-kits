const data = [{
    id: "1",
    name: "John",
    children: [{
        id: "2",
        name: "Max",
        children: []
    }]
},
{
    id: "3",
    name: "Mark",
    children: [{
        id: "4",
        name: "Steve",
        children: []
    }]
}];

function printNames(data) {
    for (const item of data) {
        console.log(item.name);
        if (item.children.length > 0) {
            printNames(item.children);
        }
    }
}

printNames(data);



// 2nd examples //
let item = [{name: "A", age: 20}, {name: "B", age: 16}, {name: "C", age: 45}]

function output(){
  let results = [];
    for(let data of item){
      if(data.age >= 18){
        results.push(data.name)
       }
    }
  return results
  }
output();
console.log(output())


