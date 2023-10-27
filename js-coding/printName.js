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