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

const x =double( result)
console.log("double",x);

// Default parameter
function calc(a,b=3){
    return (2*(a+b))
}

const res =  calc(2)
console.log("result of calc",res);

// Rest parameter

function restPara(a,b, ...rest){
    console.log(a,b,rest);
}
restPara(5,6,1,2,3,6)

// nested function

function outer(){
    console.log("outer");

    return function inner(){
        console.log("inner");
    }

    // inner()
}

const resOutr=outer()
console.log(resOutr());

// callback 

function foo(func){
    console.log("inside foo");

    func()
};

foo(function(){
    console.log('outside foo');
})