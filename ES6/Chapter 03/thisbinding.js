var x = 10;

function A(){
    var x = 5;
    const B = () => {
        console.log(this.x);
    }
    B();
}

A();