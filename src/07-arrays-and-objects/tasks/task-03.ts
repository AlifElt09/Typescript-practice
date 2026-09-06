/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];


const presentStudents = students.filter((student) => attendance.find((att) => att.studentId === student.id && att.status === "present"));
const absentStudents = students.filter((student) => attendance.find((att) => att.studentId === student.id && att.status === "absent"));
const lateStudents = students.filter((student) => attendance.find((att) => att.studentId === student.id && att.status === "late"));
const studentStatus = students.map((student) => ({ name: student.name, status: attendance.find((att) => att.studentId === student.id)?.status }));

console.log("== attendance ==")
console.log("present students :"+ presentStudents.map((p)=> p.name));
console.log("absent students :"+ absentStudents.map((a)=> a.name));
console.log("late students :"+ lateStudents.map((l)=> l.name));
console.log("student name :"+ studentStatus.map((s)=> s.name))+" student status "+studentStatus.map((s)=> s.status);