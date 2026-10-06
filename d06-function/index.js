function first() {
    console.log("hello");
}
first()

const printMe = function (a) {
    console.log("inside printMe", a);
}
printMe("world")

function sum(a, b) {
    const result = a + b
    return result
}

const result = sum(5, 4)
console.log(result);

function double(a){
    const result = a*2
    return result
}

const double =double( result)
console.log("double",double);