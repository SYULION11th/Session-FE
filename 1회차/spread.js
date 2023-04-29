const oldArray = [1, 2, 3];

const newArray = [...oldArray, 4, 5];

console.log(newArray); // [1,2,3,4,5]

const person = {
  name: "Lee",
};

const newPerson = {
  ...person,
  age: 30,
};

console.log(newPerson); // {name :'Lee' , age : 30}

function printArgs(...args) {
  console.log(args); // ['a','b','c','d']
}

printArgs("a", "b", "c", "d");
