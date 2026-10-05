for (let count = 1; count <= 5; count++) {
    console.log("loop :", count);
}

// addition of even number between 1 to 100

let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    };
};
console.log(sum);

let language = "javascript";

for (let i = 0; i<language.length; i++){
    console.log(language.charAt(i));
};

// nested for loop

for (let row = 1; row<= 3; row++){
    for(let col = 1; col<= 3; col ++){
        console.log("row",row,"col",col);
    }
}


