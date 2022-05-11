const promise = new Promise(function(resolve, reject){
    if('비동기 처리 성공'){
        resolve('매개 변수');
    } else {
        reject('매개변수');
    }
})