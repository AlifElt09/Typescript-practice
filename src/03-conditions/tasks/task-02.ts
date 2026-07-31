/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

type EmployeeRecord = {
  EmployeeName : string,
  PerformanceScore : number
}

const Employee1 : EmployeeRecord = {
  EmployeeName : "Dimas Pratama",
  PerformanceScore : 78
}

console.log("=== Employee Evaluation ===")
console.log("Employee Name" ,Employee1.EmployeeName)
console.log("Employee Score" ,Employee1.PerformanceScore)

if (Employee1.PerformanceScore>=80)  {
  console.log ("Bonus approved")
} else {
  console.log("Bonus not approved")
}