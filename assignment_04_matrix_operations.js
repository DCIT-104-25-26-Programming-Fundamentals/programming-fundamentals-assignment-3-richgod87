const readlineSync = require("readline-sync");

function readMatrix(rows, cols) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = readlineSync
            .question(`Enter row ${i + 1}: `)
            .split(" ")
            .map(Number);

        if (row.length !== cols) {
            console.log(`Error: Row must contain ${cols} numbers.`);
            return null;
        }

        matrix.push(row);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let i = 0; i < cols; i++) {
        result[i] = [];

        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function addMatrices(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

function main() {
    console.log("PART A - Matrix Transpose");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    if (matrix) {
        console.log("\nOriginal Matrix:");
        displayMatrix(matrix);

        console.log("\nTransposed Matrix:");
        displayMatrix(transposeMatrix(matrix));
    }

    console.log("\nPART B - Matrix Addition");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter Matrix 1:");
    const matrix1 = readMatrix(rows, cols);

    console.log("Enter Matrix 2:");
    const matrix2 = readMatrix(rows, cols);

    if (matrix1 && matrix2) {
        console.log("\nSum Matrix:");
        displayMatrix(addMatrices(matrix1, matrix2));
    }

    console.log("\nPART C - Matrix Multiplication");

    const rowsA = readlineSync.questionInt(
        "Enter number of rows for Matrix A: "
    );
    const colsA = readlineSync.questionInt(
        "Enter number of columns for Matrix A: "
    );

    console.log("Enter Matrix A:");
    const matrixA = readMatrix(rowsA, colsA);

    const rowsB = readlineSync.questionInt(
        "Enter number of rows for Matrix B: "
    );
    const colsB = readlineSync.questionInt(
        "Enter number of columns for Matrix B: "
    );

    if (colsA !== rowsB) {
        console.log(
            "Error: Number of columns in Matrix A must equal number of rows in Matrix B."
        );
        return;
    }

    console.log("Enter Matrix B:");
    const matrixB = readMatrix(rowsB, colsB);

    if (matrixA && matrixB) {
        console.log("\nProduct Matrix:");
        displayMatrix(multiplyMatrices(matrixA, matrixB));
    }
}

main();