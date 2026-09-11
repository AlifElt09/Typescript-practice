/** 
 * An online exam has students and questions. 
 * Tasks: 
 * 1. Calculate each student's score (each correct answer get 25 points) 
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}] 
 * 3. Calculate the average score for each category. 
 * 4. Generate final exam analytics 
 * expeced result: { 
        totalStudents: 3, 
        averageScore: 66.67, 
        highestScore: 100, 
        lowestScore: 50, 
        passedStudents: 1, 
        failedStudents: 2, 
        passRate: 33.33 
    } 
 */ 

const questions = [ 
    { id: 1, question: "What is TypeScript?", correctAnswer: "A", category: "TypeScript", }, 
    { id: 2, question: "Which method transforms an array?", correctAnswer: "B", category: "Array", }, 
    { id: 3, question: "Which method filters an array?", correctAnswer: "C", category: "Array", }, 
    { id: 4, question: "What does reduce() do?", correctAnswer: "D", category: "Array", }, 
]; 
 
const submissions = [ 
    { student: "Andi", answers: [ { questionId: 1, answer: "A" }, { questionId: 2, answer: "B" }, { questionId: 3, answer: "C" }, { questionId: 4, answer: "D" }, ], }, 
    { student: "Budi", answers: [ { questionId: 1, answer: "B" }, { questionId: 2, answer: "B" }, { questionId: 3, answer: "A" }, { questionId: 4, answer: "D" }, ], }, 
    { student: "Citra", answers: [ { questionId: 1, answer: "A" }, { questionId: 2, answer: "C" }, { questionId: 3, answer: "C" }, { questionId: 4, answer: "B" }, ], }, 
]; 
 

const studentScores = submissions.map((submission) => {

    const correct = submission.answers.filter((answer) => {

        const question = questions.find(
            (question) => question.id === answer.questionId
        )!;

        return question.correctAnswer === answer.answer;

    }).length;

    return {
        student: submission.student,
        score: correct * 25
    };
})

const studentResults = submissions.map((submission) => {

    const correct = submission.answers.filter((answer) => {

        const question = questions.find(
            (question) => question.id === answer.questionId
        )!;

        return question.correctAnswer === answer.answer;

    }).length;

    return {
        student: submission.student,
        correct: correct,
        wrong: questions.length - correct
    };
});

const categoryScores: { [key: string]: number[] } = {};

submissions.forEach((submission) => {

    submission.answers.forEach((answer) => {

        const question = questions.find(
            (question) => question.id === answer.questionId
        )!;

        if (!categoryScores[question.category]) {
            categoryScores[question.category] = [];
        }

        if (question.correctAnswer === answer.answer) {
            categoryScores[question.category].push(25);
        } else {
            categoryScores[question.category].push(0);
        }

    });

});

const averageScoreByCategory: { [key: string]: number } = {};

for (const category in categoryScores) {

    averageScoreByCategory[category] =
        categoryScores[category].reduce(
            (total, score) => total + score,
            0
        ) / categoryScores[category].length;
}

const averageScore = studentScores.reduce((total, student) => total + student.score,0) / studentScores.length;
const highestScore = Math.max(...studentScores.map((student) => student.score));
const lowestScore = Math.min(...studentScores.map((student) => student.score));
const passedStudents = studentScores.filter((student) => student.score >= 75).length;
const failedStudents = studentScores.filter((student) => student.score < 75).length;
const passRate = (passedStudents / studentScores.length) * 100;

const finalAnalytics = {
    totalStudents: submissions.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: Number(passRate.toFixed(2))
};

console.log("Final Analytics:", finalAnalytics);