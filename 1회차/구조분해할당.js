const numbers = [1, 2];

const [number1, number2] = numbers; // 배열의 구조분해할당

console.log(number1, number2); // 1,2

const person = {
  name: "Lee",
  age: "40",
};

const { name, age } = person; // 객체의 구조분해할당

console.log(name, age); // Lee , 40
