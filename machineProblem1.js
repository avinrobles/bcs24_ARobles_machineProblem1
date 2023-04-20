// ITCS227 Source Code Template for 2T AY 2022-2023
/* 
    Program:        Computation of Grades using Function
    Programmer:     Avin Nicolo R. Robles
    Section:        BCS24
    Start Date:     April 17, 2023
    End Date:       April 20, 2023
*/

//Input a table in GitBash
const Table = require('cli-table');

//require('prompt-sync')() - To read user-input inside Git Bash.
const prompt = require('prompt-sync')();

// Create an array to store the data for all the students
let table = new Table ({
    head: [
        'Name of Student',
        'Class Participation',
        'Summative Assessment',
        'Exam Grade',
        'Grade Score',
        'Letter Grade',
    ],
});

// Loop through each student and collect their data
for (let i = 1; i <= 5; i++) {
    // Prompt user for student name
    let name = prompt("Enter the name of student: ");
    
    let classParticipation = [];
    let summativeAssessment = [];

    // Prompt user for class participation grades and compute average
    for (let j = 1; j <= 5; j++) {
        //prompt users to input 5 grades
        let participation = parseFloat(prompt(`Enter enabling assessment ${j}: `));
        classParticipation.push(participation);
    }

    //Provides the average of the Enabling Assessments
    let averageEA = classParticipation.reduce((a, b) => a + b, 0) / classParticipation.length;

    // Prompt user for summative grades and compute average
    for (let k = 1; k <= 3; k++) {
        let summative = parseFloat(prompt(`Enter summative assessment ${k}: `));
        summativeAssessment.push(summative);
    }

    //Provides the average of the Summative Assessments
    let averageSA = summativeAssessment.reduce((a, b) => a + b, 0) / summativeAssessment.length;

    // Prompt user for exam grade
    let exam = parseFloat(prompt("Enter major exam grade: "));

    // Calculate the final grade
    let gradeScore = (averageEA * 0.3) + (averageSA * 0.3) + (exam * 0.4);

    // Determine letter grade
    let letterGrade = '';
    if (gradeScore >= 90) {
        letterGrade = "A";
    } else if (gradeScore >= 80) {
        letterGrade = "B";
    } else if (gradeScore >= 70) {
        letterGrade = "C";
    } else if (gradeScore >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    // Create an object to store the student's data
    let student = [
        name,
        averageEA.toFixed(2),
        averageSA.toFixed(2),
        exam.toFixed(2),
        gradeScore.toFixed(2),
        letterGrade,
    ];

    // Add the student object to the array
    table.push(student);

    // Display the results in a table format
    console.log(table.toString());

    // Clear the arrays for class participation and summative assessments
    classParticipation = [];
    summativeAssessment = [];
}