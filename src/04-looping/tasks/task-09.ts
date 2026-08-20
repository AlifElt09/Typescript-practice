/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let gradeA = 0, gradeB = 0, gradeC = 0, gradeD = 0, highest = 0, lowest = 0, totalgrade = 0

for (let student of students) {
    if (student.score >= 90) {
        gradeA++
    }
    else if (student.score >= 80) {
        gradeB++
    }
    else if (student.score >= 70) {
        gradeC++
    }
    else  {
        gradeD++
    }
    totalgrade += student.score;
    highest = highest <student.score ? student.score:highest;
    lowest = lowest >=student.score || lowest == 0? student.score:lowest;
}

const averagegrade = totalgrade / students.length ;

console.log(" === Student Grade Data === ")
console.log("Grade A student = "+gradeA)
console.log("Grade B student = "+gradeB)
console.log("Grade C student = "+gradeC)
console.log("Grade D student = "+gradeD)
console.log("Highest grade = "+highest) 
console.log("Lowest grade = "+lowest)
console.log("Average grade = "+averagegrade)