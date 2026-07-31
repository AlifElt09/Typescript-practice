/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

type StudentData = {StudentName:string, GPA:number, FamilyIncome:number, CompetitionRecord:number, HasDisciplinaryRecord:boolean, DocumentComplete:boolean}

const Student1:StudentData = {
  StudentName:"Alya Putri",
  GPA:3.89,
  FamilyIncome:4200000,
  CompetitionRecord:4,
  HasDisciplinaryRecord:false,
  DocumentComplete:true
}

const ScholarshipRequirement: number = Student1.GPA >= 3.75 && Student1.FamilyIncome < 5000000 && Student1.CompetitionRecord >= 3 && !Student1.HasDisciplinaryRecord
&& Student1.DocumentComplete ? 12000000 : 0;
const RemainingScholarshipBudget: number = 500000000 - ScholarshipRequirement;

let ScholarshipStatus: string = ScholarshipRequirement > 0 ? "Accepted" : "Not Accepted";

let SchollarshipStudentData = {
    Student1,ScholarshipRequirement,RemainingScholarshipBudget,ScholarshipStatus:ScholarshipStatus
}
console.log(SchollarshipStudentData);