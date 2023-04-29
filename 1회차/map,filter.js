const numbers = [1, 2, 3];

// 배열의 원소에 2를 곱해 반환
const numbers2 = numbers.map((number) => number * 2);

console.log(numbers2); // [2,4,6]

// 배열의 원소가 1보다 큰 수만 반환
const numbers3 = numbers.filter((number) => number > 1);

console.log(numbers3); // [2,3]
