/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */


const student1 = {
  studentID: "SMK1",
  fullName: "Alif",
  age: 15,
  StudentStatus: true,
};

const student2 = {
  studentID: "SMK2",
  fullName: "Aliya",
  age: 16,
  StudentStatus: true,
};

const student3 = {
  studentID: "SMK3",
  fullName: "Alifa",
  age: 17,
  StudentStatus: true,
};

let studentData = [student1, student2, student3];

console.log("=== Student Information ===");
console.log(studentData);