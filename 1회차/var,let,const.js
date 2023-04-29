var a = 1;
var a = 2; //var는 재선언 가능

console.log(a); // 2

let b = 1;
b = 2;

console.log(b); // 2

const c = 1;
c = 2;

console.log(ca); // 에러 발생 (const는 재할당이 불가능하다)
