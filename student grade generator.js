function calculateGrade() {
    if (marks > 79) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  const userMarks = parseInt(prompt("Enter your marks: ")); //Marks = parseInt(prompt("72"));
  const userGrade = calculateGrade(userMarks);
  alert(
    `Your grade is: ${userGrade}`
  )
  console.log(userGrade)
