let Rectangle = class {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    getArea() {
        return this.w * this.h;
    }
}

let Square = class extends Rectangle {
    constructor(w) {
        super(w, w);
    }

    getArea(){
        console.log(`area : ${super.getArea()}`);
    }
}

let s1 = new Square(3);
s1.getArea();