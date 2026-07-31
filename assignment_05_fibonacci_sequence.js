const readlineSync = require("readline-sync");

function printFibonacci(n) {
    let a = 0;
    let b = 1;
    let sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + sequence.join(" "));
}

function isFibonacci(number) {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            return true;
        }

        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}

function main() {
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: Number of terms must be positive.");
        return;
    }

    printFibonacci(n);

    const number = readlineSync.questionInt(
        "Enter a number to check: "
    );

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

main();