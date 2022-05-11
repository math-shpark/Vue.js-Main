// Spread 연산자
// 함수 매개변수로 활용

function A(x, y, z){
    console.log(x);
    console.log(y);
    console.log(z);
}

const arr = [1, 2, 3];

A(...arr);