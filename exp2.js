let employees = [];

function addEmployee() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let salary = Number(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value;

  if (!name || !id || !salary || !dept) {
    alert("Fill all fields properly");
    return;
  }

  let emp = {
    name: name,
    id: id,
    salary: salary,
    dept: dept,
  };

  employees.push(emp);
  alert("Employee Added");

  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("dept").value = "";
}

function displayEmployees() {
  let output = "";

  for (let emp of employees) {
    output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.dept}<br>`;
  }

  document.getElementById("output").innerHTML = output || "No records found";
}

function filterSalary() {
  let filtered = employees.filter((emp) => emp.salary > 50000);

  let output = filtered
    .map((emp) => `Name: ${emp.name}, Salary: ₹${emp.salary}`)
    .join("<br>");

  document.getElementById("output").innerHTML =
    output || "No high salary employees";
}

function totalSalary() {
  let total = 0;

  for (let emp of employees) {
    total += emp.salary;
  }

  document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

function averageSalary() {
  if (employees.length === 0) {
    document.getElementById("output").innerHTML = "No employees";
    return;
  }

  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  let avg = total / employees.length;

  document.getElementById("output").innerHTML =
    "Average Salary: ₹" + avg.toFixed(2);
}

function countDept() {
  let deptName = prompt("Enter department name:");
  let count = 0;

  for (let emp of employees) {
    if (emp.dept.toLowerCase() === deptName.toLowerCase()) {
      count++;
    }
  }

  document.getElementById("output").innerHTML =
    `Employees in ${deptName}: ${count}`;
}