/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const Finalscore = 82;
const Attendance = 94;
const TuitionIsPaid:boolean = true;

const isEligible = Finalscore >=75 && Attendance >=90 && TuitionIsPaid ? "Pass" : "Fail" ;


console.log("==Student Eligible==")
console.log(
  "FinalScore",isEligible,
  "Attendance",isEligible,
  "TuitionStatus",isEligible
)