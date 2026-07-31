/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement, 
 * will be display "Congratulations! You are eligible to graduate.", 
 * otherwise display "You are not eligible to graduate."
 */

type Student = {
  StudentName: string;
  FinalScore: number;
  Attendance: number;
  TuitionIsPaid: boolean;
};
const Student1 : Student = {
    StudentName : "Alya putri",
    FinalScore : 60,
    Attendance : 94,
    TuitionIsPaid : true
}

console.log("=== Penilaian kelulusan ===")

if (Student1.FinalScore>=75) {
  console.log("Nilai = " + Student1.FinalScore,"Nilai murid sudah baik")
} else if (Student1.FinalScore<75) {
  console.log("Nilai = "+ Student1.FinalScore,"Nilai murid berada dibawah KKM!")
} else {
  console.log("Nilai tidak valid")
}

if (Student1.Attendance>=90) {
  console.log("Kehadiran murid = "+Student1.Attendance ,"Kehadiran murid selalu tepat waktu")
} else if (Student1.Attendance<90) {
  console.log("Kehadiran murid = "+Student1.Attendance ,"Kehadiran murid masih belum menepati kriteria")
} else {
  console.log("Kehadiran tidak valid")
}

if (Student1.TuitionIsPaid) {
  console.log("SPP Murid = "+ Student1.TuitionIsPaid,"Murid telah membayar spp")
} else {
  console.log("SPP Murid = "+ Student1.TuitionIsPaid,"Murid belum membayar spp")
}

console.log((Student1.FinalScore>=75&&Student1.Attendance>=90&&Student1.TuitionIsPaid)?"Selamat anda telah lulus!":"Rasain tuh gak lulus wkwkwk")