const obj = {
    func1: function(){
        console.log("JavaScript");
        return this;
    },
    func2: function(){
        console.log("CSS");
        return this;
    },
    func3: function(){
        console.log("HTML");
        return this;
    }
}

obj.func1().func2().func3();