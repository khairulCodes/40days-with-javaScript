// 1. 
let day = "Monday"

switch (day) {
    case "monday":
        console.log("It's the start of the weak");
        break;
    default:
        console.log("It's a normal day");
}

// ouptput : It's a normal day. Because javascript is case sensative.

//2. Build a cash atm withdraw system
let amount = 250;

if (amount % 100 === 0) {
    console.log("Withdraw successfull");
} else {
    console.log("Invalid amount");
}

// 3. Build a Caculator with switch-case
let operator = "/";
const fNum = 10;
const secNum = 0
let result;

switch (operator) {
    case "+":
        result = fNum + secNum
        break;
    case "-":
        result = fNum - secNum
        break;
    case "/":
        if (secNum === 0) {
            result = "Cannot divided by zero"
        } else {
            result = fNum / secNum
        }
        break;

    case "*":
        result = fNum * secNum
        break;
    case "%":
        if (secNum === 0) {
            result = "Cannot divided by zero"
        } else {
            result = fNum % secNum
        }
        break;

    default:
        result = "wrong input"
}
console.log("result :", result);


// 4. Pay for your movie ticket
let age = 180;
let price;

if (age < 18) {
    price = 3;
} else if (age <= 60) {
    price = 10;
} else {
    price = 8;
}
console.log(`Ticket price is $${price}`);

// 5. season checker 
let month = "june";
const formattedMonth = month.toLowerCase();
let season;

switch (formattedMonth) {
    case "december":
    case "january":
    case "february":
        season = "Winter";
        break;
    case "march":
    case "april":
    case "may":
        season = "Spring";
        break;
    case "june":
    case "july":
    case "august":
        season = "Summer";
        break;
    case "september":
    case "october":
    case "november":
        season = "Autumn";
        break;

    default:
        season = "Invalid Month";
        break;

}
console.log(season);

// .6 

function triangleCheck(a, b, c) {
    let answer;

    if (a === b && b === c) {
        answer = 'Equilateral'
    } else if (a === b || b === c || a === c) {
        answer = 'Isosceles'
    } else {
        answer = 'Scalene'
    }
    console.log(answer);
}
triangleCheck(5, 4, 3)