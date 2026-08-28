/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
}

const submissions : Submission[] = [
    {student: "Alya",submitted: true,score: 90},
    {student: "Budi",submitted: false,score: 0},
    {student: "Citra",submitted: true,score: 84},
    {student: "Dimas",submitted: true,score: 72},
    {student: "Eka",submitted: false,score: 0},
    {student: "Fajar",submitted: true,score: 96}
];

function countSubmitted(submissions : Submission[]) : number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted) {
            count++;
        }
    }
    return count;
}

function countNotSubmitted(submissions : Submission[]) : number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (!submissions[i].submitted) {
            count++;
        }
    }
    return count;
}

function countPassed(submissions : Submission[]) : number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score >= 75) {
            count++;
        }
    }
    return count;
}

function countFailed(submissions : Submission[]) : number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score < 75) {
            count++;
        }
    }
    return count;
}

function averageScore(submissions : Submission[]) : number {
    let total = 0;
    for (let i = 0; i < submissions.length; i++) {
        total += submissions[i].score;
    }
    return total / submissions.length;
}

function highestScore(submissions : Submission[]) : number {
    let highest = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score > highest) {
            highest = submissions[i].score;
        }
    }
    return highest;
}

function lowestScore(submissions : Submission[]) : number {
    let lowest = 100;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score < lowest) {
            lowest = submissions[i].score;
        }
    }
    return lowest;
}

function showReport (submissions : Submission[]) {
    console.log(`Total students: ${submissions.length}`);
    console.log(`Submitted assignments: ${countSubmitted(submissions)}`);
    console.log(`Missing assignments: ${countNotSubmitted(submissions)}`);
    console.log(`Passed students: ${countPassed(submissions)}`);
    console.log(`Students requiring revision: ${countFailed(submissions)}`);
    console.log(`Average score: ${averageScore(submissions)}`);
    console.log(`Highest score: ${highestScore(submissions)}`);
    console.log(`Lowest score: ${lowestScore(submissions)}`);
}

showReport(submissions);