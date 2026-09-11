/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */


type Student = {
  name: string;
  major: string;
  active: boolean;
};

const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: Student[]): number {
  return students.filter((student) => student.active).length;
}

function countInactiveStudents(students: Student[]): number {
  return students.filter((student) => !student.active).length;
}

function countStudentsByMajor(
  students: Student[],
  major: string
): number {
  return students.filter((student) => student.major === major).length;
}

function printEnrollmentReport(students: Student[]): void {
  console.log(`Total students: ${students.length}`);
  console.log(`Active students: ${countActiveStudents(students)}`);
  console.log(`Inactive students: ${countInactiveStudents(students)}`);
  console.log(`Software Engineering students: ${countStudentsByMajor(students,"Software Engineering")}`);
  console.log(`Networking students: ${countStudentsByMajor(students,"Networking")}`);
  console.log(`Multimedia students: ${countStudentsByMajor(students,"Multimedia")}`);
}

printEnrollmentReport(students);
