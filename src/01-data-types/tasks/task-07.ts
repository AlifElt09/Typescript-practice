/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

enum PaymentStatus {
    Paid = "Paid",
    Unpaid = "Unpaid",
}
enum GradeLevel {
    A = "Expert",
    B = "Advanced",
    C = "Intermediate",
}
type studentInfo = {
    studentId: string;
    fullName: string;
    gradeLevel: GradeLevel;
};

type courseInfo = {
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
};

type registrationInfo = {
    studentInfo: studentInfo;
    courseInfo: courseInfo;
    registrationDate: string;
    paymentStatus: PaymentStatus;
};

const instructorname: string = "SMK Telkom Malang";

const courses: courseInfo[] = [
    {
        courseId: "C01",
        courseTitle: "Python Fundamentals",
        instructorName: "instructorname",
        totalLearningHours: 10,
    },
    {
        courseId: "C02",
        courseTitle: "Ui/Ux fundamentals",
        instructorName: "instructorname",
        totalLearningHours: 6,
    },
]
const students1: studentInfo = {
    studentId: "S01",
    fullName: "Alifa",
    gradeLevel: GradeLevel.C,
};
const students2: studentInfo = {
    studentId: "S02",
    fullName: "Alifia",
    gradeLevel: GradeLevel.B,
};
const students3: studentInfo = {
    studentId: "S03",
    fullName: "Alif",
    gradeLevel: GradeLevel.A,
};

let students: studentInfo[] = [students1, students2, students3];
const registrations: registrationInfo[] = [
    {
        studentInfo: students[0],
        courseInfo: courses[0],
        registrationDate: "2026-09-01",
        paymentStatus: PaymentStatus.Paid,
    },
    {
        studentInfo: students[1],
        courseInfo: courses[1],
        registrationDate: "2026-09-02",
        paymentStatus: PaymentStatus.Unpaid,
    },
    {
        studentInfo: students[2],
        courseInfo: courses[1],
        registrationDate: "2026-09-03",
        paymentStatus: PaymentStatus.Paid,
    },
]
console.log("-- Registration Summary --");
console.log(registrations);
