let arr1 = ["seoul", "incheon", "busan"];
let arr2 = ["ulsan", "daegu"];

// ES6 이전
Array.prototype.push.apply(arr1, arr2);

// ES6 이후
arr1.push(...arr2);

console.log(arr1);