const obj = {
    x : 1,
    y : 2
};

const obj2 = {...obj};

// console.log(obj1); // 에러 발생
console.log(obj2);

const obj3 = {... obj, ...{x: 2, y: 4}};
console.log(obj3);