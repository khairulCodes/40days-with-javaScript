const fruits = "mango"
let vegetables = "carrot"
vegetables = fruits
// console.log(fruits);
// console.log(vegetables);

/**
 * primitive data type —> passed by value. if we assign: variable1 = variable2. only the left side will change;  variable1= value of variable2. similarly variable2 = variable1 meaning variable2 = value of variable1
 */

let user = "abier" // let syntax is block-scoped & re-assignable
const money = "10" // let syntax is block-scoped & not re-assignable

let object = {
    id: 101,
    address: "bangladesh",
    color: "black"
}

let arr = ["html", "css", "javaScript"]
console.log(object,'array - ' + arr);


const name = "kabir";
let age = 20;
const isStudent = true;
// name ="amir"
age = 22
console.log({name,age,isStudent});

