class Person{
    constructor(name, phone){
        this._name = name;
        this.phone = phone;
    }

    hello(){
        console.log("Hello " + this.name + "!");
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(newName){
        if(newName){
            this._name = newName;
        }
    }
}

const hong = new Person("Hong Gil Dong", "010-1111-1111");

hong.hello();
hong.name = "kim";
hong.hello();