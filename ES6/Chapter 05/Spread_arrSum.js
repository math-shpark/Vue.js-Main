// 배열 병합
// ES6 이전 방식
let arr = [4, 5, 6, 7];
console.log(arr.concat([8, 9, 10]));

// ES6 이후 방식
console.log([...arr, 8, 9, 10]);