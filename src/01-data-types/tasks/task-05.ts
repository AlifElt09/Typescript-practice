/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
const enum AttendanceStatus {
    Present = "Present",
    Absent = "Absent",
}

type employeeAttendance = {
    employeeId: string;
    employeeName: string;
    date: string;
    PresentInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    status: AttendanceStatus;
};

const employee1: employeeAttendance = {
    employeeId: "emp1",
    employeeName: "John Doe",
    date: "27/06/2026",
    PresentInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    status: AttendanceStatus.Present,
};

const employee2: employeeAttendance = {
    employeeId: "emp2",
    employeeName: "Jane Doe",
    date: "27/06/2026",
    PresentInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    status: AttendanceStatus.Absent,
};

const employee3: employeeAttendance = {
    employeeId: "emp3",
    employeeName: "John Doe",
    date: "27/06/2026",
    PresentInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    status: AttendanceStatus.Present,
};

let attendanceRecords: employeeAttendance[] = [employee1, employee2, employee3];

console.log("-- Employee Attendance Records Summary --");
console.log(attendanceRecords);