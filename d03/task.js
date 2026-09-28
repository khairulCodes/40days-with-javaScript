// 1. even or odd
const randomNum = 2;

if (randomNum % 2 === 0) {
    console.log(`${randomNum} is Even`);
} else {
    console.log(`${randomNum} is Odd`);
}

// 2. licence eligible checker
const age = 1
if (age >= 18) {
    console.log("Eligible for licence");
} else {
    console.log("Not eligible for licence");
}

// 3. Calculate Cost to Company
const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const anlBonus = annualSalary * 0.2
console.log("Total annual earning is ", annualSalary + anlBonus, "Taka");

// 4. Traffic light
const color = "red";
if (color.toLocaleLowerCase() === "green") {
    console.log("Go");
} else if (color.toLocaleLowerCase() === "red") {
    console.log("Stop");
} else {
    console.log("Invalid Color");
}

// 5. Bill Calculator
const unit = 12;
const CostEachDay = unit * 150;
const monthlyCost = CostEachDay * 30;
const anlCost = monthlyCost * 12;
const anlDiscount = anlCost * 0.2;
console.log("Monthly charge ", monthlyCost);
console.log("Total annual charge ", (anlCost - anlDiscount), " taka");

//6. leap year
const year = 2040;
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not Leap year"

//7. Max number identifier
const p = 7
const q = 9;
const r = 16;

if (q >= p && q >= r) {
    console.log(q, "is the max number");
} else if (p >= q && p >= r) {
    console.log(p, "is the max number");
} else {
    console.log(r, "is the max number");
}

//8. Bitwise Doubling
const count = 5
const doubleCount = count << 1
console.log(doubleCount);
