/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 *
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 *
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 *
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 *
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type enrollment = {
  student: string;
  course: string;
  completed: boolean;
  score: number;
  duration: number;
};

const enrollments: enrollment[] = [
  {student: "Alya",course: "TypeScript",completed: true,score: 91,duration: 38,},
  {student: "Budi",course: "TypeScript",completed: false,score: 45,duration: 12,},
  {student: "Citra",course: "Database",completed: true,score: 87,duration: 42,},
  {student: "Dimas",course: "Backend",completed: true,score: 96,duration: 40,},
  {student: "Eka",course: "Database",completed: false,score: 60,duration: 18,},
  {student: "Fajar",course: "Backend",completed: true,score: 82,duration: 35,},
  {student: "Gita",course: "TypeScript",completed: true,score: 88,duration: 36,},
  {student: "Hana",course: "Backend",completed: false,score: 70,duration: 20,},
];

function totalEnrollments(enrollments: enrollment[]): number {
  return enrollments.length;
}

function completedEnrollment(enrollments: enrollment[]): number {
  return enrollments.filter((enrollment) => enrollment.completed).length;
}

function incompleteEnrollment(enrollments: enrollment[]): number {
  return totalEnrollments(enrollments) - completedEnrollment(enrollments);
}

function completionPercentage(enrollments: enrollment[]): number {
  return (
    (completedEnrollment(enrollments) / totalEnrollments(enrollments)) * 100
  );
}

function highestScore(enrollments: enrollment[]): number {
  return Math.max(...enrollments.map((enrollment) => enrollment.score));
}

function lowestScore(enrollments: enrollment[]): number {
  return Math.min(...enrollments.map((enrollment) => enrollment.score));
}

function averageScore(enrollments: enrollment[]): number {
  const totalScore = enrollments.reduce(
    (total, enrollment) => total + enrollment.score,
    0,
  );
  return totalScore / totalEnrollments(enrollments);
}

function studentsWithPassingScores(enrollments: enrollment[]): enrollment[] {
  return enrollments.filter((enrollment) => enrollment.score >= 75);
}

function numberOfStudentsInEachCourse(
  enrollments: enrollment[],
): Record<string, number> {
  const courseCounts: Record<string, number> = {};

  for (const enrollment of enrollments) {
    if (courseCounts[enrollment.course] === undefined) {
      courseCounts[enrollment.course] = 0;
    }
    courseCounts[enrollment.course]++;
  }
  return courseCounts;
}

function averageScoreForEachCourse(
  enrollments: enrollment[],
): Record<string, number> {
  const courseScores: Record<string, number[]> = {};

  for (const enrollment of enrollments) {
    if (courseScores[enrollment.course] === undefined) {
      courseScores[enrollment.course] = [];
    }
    courseScores[enrollment.course].push(enrollment.score);
  }
  const averages: Record<string, number> = {};
  for (const course in courseScores) {
    const scores = courseScores[course];

    averages[course] =
      scores.reduce((total, score) => total + score, 0) / scores.length;
  }

  return averages;
}

function totalLearningHours(enrollments: enrollment[]): number {
  const totalMinutes = enrollments.reduce((total, enrollment) => total + enrollment.duration,0,);
  return totalMinutes / 60;
}

function averageLearningDuration(enrollments: enrollment[]): number {
  const totalDuration = enrollments.reduce((total, enrollment) => total + enrollment.duration,0,);
  return totalDuration / totalEnrollments(enrollments);
}

function printCompletionStatistics(enrollments: enrollment[]): void {
  console.log("=== Completion Statistics ===");
  console.log(`Total enrollments: ${totalEnrollments(enrollments)}`);
  console.log(`Completed enrollments: ${completedEnrollment(enrollments)}`);
  console.log(`Incomplete enrollments: ${incompleteEnrollment(enrollments)}`);
  console.log(`Completion percentage: ${completionPercentage(enrollments).toFixed(2)}%`,);
}

function printAcademicStatistics(enrollments: enrollment[]): void {
  console.log("\n=== Academic Statistics ===");
  console.log(`Highest score: ${highestScore(enrollments)}`);
  console.log(`Lowest score: ${lowestScore(enrollments)}`);
  console.log(`Average score: ${averageScore(enrollments).toFixed(2)}`);
  console.log("Students with passing scores:");
  for (const enrollment of studentsWithPassingScores(enrollments)) {
    console.log(`- ${enrollment.student}: ${enrollment.score}`);
  }
}

console.log("=== Enrollment Statistics ===");
printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
console.log("\n=== Course Statistics ===");
console.log("Students enrolled in each course:");
console.log(numberOfStudentsInEachCourse(enrollments));
console.log("Average score for each course:");
console.log(averageScoreForEachCourse(enrollments));
console.log("\n=== Learning Statistics ===");
console.log(`Total learning hours: ${totalLearningHours(enrollments).toFixed(2)}`,);
console.log(`Average learning duration: ${averageLearningDuration(enrollments).toFixed(2)} minutes`,);
