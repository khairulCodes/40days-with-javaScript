// Arithmatic operator
let x = 5
console.log(x++); // first return the value =5 , then increase. it's called post increase
console.log(x); // now increased, x + 1 = 6
console.log(++x); // first increased and return the value = 7 . it's called pre increased.

console.log(--x); // 6


// Assignment operator

let y = 10;
y += 5; // y= 10 + 5 (15)
y -= 3; // y = 15 - 3 (12)
y *= 2; // y = 12 * 2 (24)
y /= 4; // y = 24 / 4 (6)

// Comparison
console.log(0==true); //false
console.log(0==false); //true

console.log(3 === "3");
console.log(null === null);
console.log(undefined == null); //true


// logical operator - &&, ||, ??, (Nullish Coalescing), ! (logical not).
/**
 * logical and (&&) rule : 
 * exm- op1 && op2 ;  if the first opearand (op1) is "falsy", then 
 * it will return first operand (op1). otherwise return second operand (op2) value.
 */


console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false ; first operand "true" can't convert "false", so result will return by the second operand bases. which value is "false"
console.log(true && true); // true ; first operand "true" can't convert "false", so result will return by the second operand bases. which value is "true"

console.log("object" && "Array"); // 

console.log("Apple" && "Orange");

console.log("Color" || "Blue");

console.log("Yellow" ?? "false"); // yellow; nullish coalescing (??) operator skip null and undefined only


// bitwise operator
 15 | 9;
 1111 | 1001
  
/**
 *  15 / 2 = 7 (1);
 7 / 2 = 3 (1)
 3 / 2 = 1 (1)

 9 / 2 = 4(1)
 4 / 2 = 2 (0)
 2 / 2 = 1 (0)
 */

 // typeOf
 console.log(typeof null);
 console.log(typeof undefined);
 console.log(typeof [2,5,22]);
