/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];
let goldmedal = 0, silvermedal = 0, bronzemedal = 0, nomedal = 0,totalscore = 0

scores.forEach( score => {
  if(score>=95) {
    goldmedal++
  } else if (score>=85) {
    silvermedal++
  } else if (score>=75) {
    bronzemedal++
  } else {
    nomedal++
  }
  totalscore += score
  }
)

const averageScore = totalscore / scores.length;

console.log("=== Student achivement ===")
console.log("Student with gold medal : "+goldmedal)
console.log("Student with silver medal : "+silvermedal)
console.log("Student with bronze medal : "+bronzemedal)
console.log("Student with no medal : "+nomedal)
console.log("Average student Scores : "+averageScore)