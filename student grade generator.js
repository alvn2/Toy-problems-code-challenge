function calculateGrade(marks) {
    let grade;

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid marks entered. Please enter a number between 0 and 100.");
        return;
    }

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(`The grade is: ${grade}`);
}

const marks = parseInt(process.argv[2]);
calculateGrade(marks);
