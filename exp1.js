function calculateResult() {
  let n = document.getElementById("subjects").value;

  if (n <= 0 || n === "") {
    alert("Enter valid number of subjects");
    return;
  }

  let total = 0;

  for (let i = 1; i <= n; i++) {
    let marks = prompt("Enter marks for subject " + i);

    if (marks === null || marks === "" || marks < 0 || marks > 100) {
      alert("Invalid marks entered");
      return;
    }

    total += Number(marks);
  }

  let avg = total / n;

  let grade;
  let result;

  if (avg >= 90) grade = "A+";
  else if (avg >= 75) grade = "A";
  else if (avg >= 60) grade = "B";
  else if (avg >= 50) grade = "C";
  else grade = "F";

  result = avg >= 40 ? "PASS" : "FAIL";

  document.getElementById("result").innerHTML =
    "Total Marks: " +
    total +
    "<br>" +
    "Average Marks: " +
    avg.toFixed(2) +
    "<br>" +
    "Grade: " +
    grade +
    "<br>" +
    "Result: " +
    result;
}