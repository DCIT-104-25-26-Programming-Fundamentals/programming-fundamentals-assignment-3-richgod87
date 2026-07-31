const readlineSync = require("readline-sync");

function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

function addStudent(students) {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const numScores = readlineSync.questionInt(
        "How many scores? "
    );

    const scores = [];

    for (let i = 0; i < numScores; i++) {
        scores.push(
            readlineSync.questionFloat(
                `Enter score ${i + 1}: `
            )
        );
    }

    students.push({
        name: name,
        id: id,
        scores: scores
    });

    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents(students) {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log("\nName:", student.name);
        console.log("ID:", student.id);
        console.log("Scores:", student.scores.join(", "));
        console.log(
            "Average Score:",
            calculateAverage(student.scores).toFixed(2)
        );
    }
}

function calculateStudentAverage(students) {
    const id = readlineSync.questionInt(
        "Enter student ID: "
    );

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                `${students[i].name}'s average score: ${calculateAverage(
                    students[i].scores
                ).toFixed(2)}`
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

function main() {
    const students = [];
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayAllStudents(students);
                break;

            case 3:
                calculateStudentAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid choice.");
        }
    } while (choice !== 4);
}

main();