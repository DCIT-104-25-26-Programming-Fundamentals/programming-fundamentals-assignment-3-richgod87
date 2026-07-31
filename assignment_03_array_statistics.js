const readlineSync = require("readline-sync");

function calculateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function calculateAverage(arr) {
    return calculateSum(arr) / arr.length;
}

function findMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function findMinimum(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of elements must be positive.");
        return;
    }

    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(
            readlineSync.questionFloat(`Enter number ${i + 1}: `)
        );
    }

    console.log("\nResults:");
    console.log("Sum:     " + calculateSum(numbers));
    console.log("Average: " + calculateAverage(numbers));
    console.log("Maximum: " + findMaximum(numbers));
    console.log("Minimum: " + findMinimum(numbers));
}

main();