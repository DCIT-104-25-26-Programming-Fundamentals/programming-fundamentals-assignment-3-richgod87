const readlineSync = require("readline-sync");

function printSingleTable(number) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function printTablesUpToN(n) {
    for (let num = 1; num <= n; num++) {
        console.log(`\nMultiplication Table for ${num}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }

        console.log("---------------------------");
    }
}

function main() {
    const number = readlineSync.questionInt(
        "Enter a number for a single multiplication table: "
    );

    if (number <= 0) {
        console.log("Error: Number must be positive.");
        return;
    }

    printSingleTable(number);

    const n = readlineSync.questionInt(
        "\nEnter N for multiplication tables from 1 to N: "
    );

    if (n <= 0) {
        console.log("Error: N must be positive.");
        return;
    }

    printTablesUpToN(n);
}

main();