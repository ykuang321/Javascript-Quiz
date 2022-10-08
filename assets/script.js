//Variables
const startButton = document.getElementById("start-btn");
const displayQuestion = document.getElementById("question");
const answerButton = document.getElementsByClassName("answer");
var displayAnswers = document.querySelectorAll(".answer");
var questionIndex = 0;
//var currentAnswers =[];
var timerCount;

startButton.addEventListener('click', startGame);



const javascriptQuestions = [
  //question 1
  {
    question:"What is 2+2",
    answers: [
      'A: 3',
      'B: 4',
      'C: 5',
      'D: 6'
    ],
    correctAnswer: 'b'
  },
  //question 2
  {
    question:"What is 2+3",
    answers: [
      'A: 3',
      'B: 4',
      'C: 5',
      'D: 6'
    ],
    correctAnswer: 'b'
  },
  //question 3
  {
    question:"What is 2+4",
    answers: [
      'A: 3',
      'B: 4',
      'C: 5',
      'D: 6'
    ],
    correctAnswer: 'b'
  },
  //question 4
  {
    question:"What is 2+5",
    answers: [
      'A: 3',
      'B: 4',
      'C: 5',
      'D: 6'
    ],
    correctAnswer: 'b'
  },
    //question 5
    {
      question:"What is 2+6",
      answers: [
        'A: 3',
        'B: 4',
        'C: 5',
        'D: 6'
      ],
      correctAnswer: 'b'
    }
]











// Functions

function startGame(){


startButton.classList.add('hide');

document.getElementById("quiz").style.display = "flex";
document.getElementById("start-page").style.display = "none";

countDownTimer();
displayQuestions();
}


function displayQuestions(){

  //check timer and available questions
  if (timerCount === 0 || questionIndex >= javascriptQuestions.length){
   
    return endQuiz();
  }

   //display questions and answers
  else { 
    displayQuestion.innerText = javascriptQuestions[questionIndex].question;

    var currentAnswers = javascriptQuestions[questionIndex].answers;
    for (var i = 0; i<displayAnswers.length;i++){
    displayAnswers[i].innerText = currentAnswers[i];
    }
    console.log('1questionIndex is ' + questionIndex);
    //questionIndex++;
  }

}



document.addEventListener('click', function(event){
  if (timerCount === 0 || questionIndex >= javascriptQuestions.length){
    return endQuiz();
  }

  var answerPicked = event.target;
  const selectedAnswer = answerPicked.dataset['number'];
  questionIndex++;

  checkAnswer();
  displayQuestions();
});



function checkAnswer() {




}



function countDownTimer(){


}



function endQuiz(){

  alert("bye-bye")

}