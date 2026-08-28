/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

type stdAttend = {nameStudent : string, present : boolean}

const attendances : stdAttend[] = [
    { nameStudent: "Alya", present: true },
    { nameStudent: "Budi", present: false },
    { nameStudent: "Citra", present: true },
    { nameStudent: "Dimas", present: true },
    { nameStudent: "Eka", present: false }
];

function printAttendanceReport (attendances:stdAttend[]) {
    let totalAbsent = 0, totalPresent = 0, presentName:string = "", absentName:string = ""
    attendances.forEach ( attendances =>{
        if (attendances.present) {
        totalPresent++
        presentName += ` ${attendances.nameStudent},`
        } else {
        totalAbsent++
        absentName += ` ${attendances.nameStudent},`
        }
    })
    console.log("Student name :"+absentName)
    console.log("Total absent :"+ totalAbsent)
    console.log("Student name :"+presentName)
    console.log("Total present :"+ totalPresent)
}

printAttendanceReport(attendances)
