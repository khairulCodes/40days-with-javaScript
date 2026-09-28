console.log("day 04");

// one condition statement
const age = 15
if (age >= 18) {
    console.log("Eligible for get the driving licence");
} else {
    console.log("Not eligible for get the driving licence");
};

// multiplec Condition using if else
const num = 0
if (num === 0) {
    console.log("zero equal zero"); //zero equal zero
}
if (num <= 0)
    console.log("zero less then or equal zero"); //zero less then or equal zero
if (num >= 0)
    console.log("zero greater than or equal zero"); // zero greater than or equal zero

// all satement will execute, if we are not using "else"



// multiple condition using switch..case
let day = "Saturday";
const capDay = day.charAt(0).toUpperCase() + day.slice(1)

switch (capDay) {
    case "Sunday":
        console.log("Working day");
        break;
    case "Monday":
        console.log("Working day");
        break;
    case "Tuesday":
        console.log("Working day");
        break;
    case "Wednesday":
        console.log("Working day");
        break;
    case "Thusday":
        console.log("Working day");
        break;
    case "Friday":
    case "Saturday":
        console.log("Weekend day");
        break;

    default:
        console.log("Wrong Input");
};


let month = "march";
const capMonth = month.charAt(0).toUpperCase() + month.slice(1)
let season;

switch (capMonth) {
    case "December":
    case "January":
    case "February":
        season = "Winter"
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring"
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer"
        break;
    case "September":
    case "October":
    case "December":
        season = "Autumn"

    default: season = "Wrong Input"
        break;
}
console.log(season);