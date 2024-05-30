const input = require('readline-sync'); 

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

 // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
correctAnswer = correctAnswer.toLowerCase();
let candidateAnswer = ""
correctAnswer = correctAnswer.toLowerCase();

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 
  let candidateName = input.question("Enter your name: ");

   // TODO 1.1c: Greet candidate using their name //
console.log("Hello, "  +  candidateName + "!");
}
console.log(askForName());

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++ ) {
      let userResponses = input.question(`Answer the following question: ${questions[i]}`).toLowerCase();
    console.log(`The correct answer = ${correctAnswers[i]}.\nYour answer = ${userResponses}`);
    candidateAnswers.push(userResponses);
    }
    console.log(`Your answers were as follows: ${candidateAnswers}.`);
}
 console.log(askQuestion());

 console.log("Let's grade your quiz!");
 
   
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
 //TODO 3.2 use this variable to calculate the candidates score.
let score = 0;
function gradeQuiz() {
  for (i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    score += 1;
    }
    console.log(`You have ${score} out of 5 correct!`); 
   
  } function calculateGrade() {
  let grade = score * 20;
  return grade;
  }
  console.log(calculateGrade());
}
console.log(gradeQuiz());


function runProgram() {
  console.log(askForName());
  console.log(askQuestion());
  console.log(gradeQuiz());
  
}

 
 

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}