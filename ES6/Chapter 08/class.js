class Person {
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }

    hello(){
        console.log("Hello " + this.name + "!");
    }
}

const hong = new Person("Hong Gil Dong", "010-1111-1111");
hong.hello();