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

for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i));
};

// nested for loop

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log("row", row, "col", col);
    }
}

// break and continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

for (let i = 1; i<= 5; i++){
    if(i===3)continue;
    console.log(i);
}


// Multiple counter in one loop

for (let i = 1, j = 10; i <=10 && j >=1; i++, j--){
    console.log("i",i,"j", j);
}


// While and do-while
let i = 0;

while(i<=5){
    console.log("while",i);
    i++
}


let num = 1;
do{
    console.log(num);
    num ++
}while(num<= 5)


    