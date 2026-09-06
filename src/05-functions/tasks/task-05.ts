/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [82,91,76,88,69,94,73,85,79,97];

function findHighestScore(scores: number[]): number {
  let highest = 0;
  scores.forEach(score => {
    if (score > highest) {
      highest = score;
    }
  })
  return highest;
}

function findLowestScore(scores: number[]): number {
  let lowest = 0;
  if (scores.length > 0) {
    lowest = scores[0];
  }
  scores.forEach(score => {
    if (score < lowest) {
      lowest = score;
    }
  })
  return lowest;
}

function calculateAverage(scores: number[]): number {
    let totalScores = 0;
    scores.forEach(score => {
        totalScores += score;
    })
    return totalScores / scores.length;
}

function countPassedStudents(scores: number[]): number {
    let passed = 0;
    scores.forEach(score => {
        if (score >= 75) {
            passed++;
        }
    })
    return passed;
}

console.log("== Scores ==")
console.log("Highest score: " + findHighestScore(scores));
console.log("Lowest score: " + findLowestScore(scores));
console.log("Average score: " + calculateAverage(scores));
console.log("Passed students: " + countPassedStudents(scores));