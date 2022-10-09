//variables
const startButton = document.getElementById("start-btn");
const answerButton = document.getElementsByClassName("answer");
const countDownTime = document.getElementById("timer");

const displayQuestion = document.getElementById("question");
const saveButton = document.getElementById("save-btn");
const finalScore = document.getElementById("final-score")
var initial = document.getElementById("msg");

var displayAnswers = document.querySelectorAll(".answer");
var questionIndex = 0;
var timeCount = 60;
var scoreCount = 0;



//declare an array of object for the questions and answers
const javascriptQuestions = [
  //question 1
  {
    question:"Inside which HTML element do we put the JavaScript?",
    answers: [
      'A: <javascript>',
      'B: <js>',
      'C: <scripting>',
      'D: <script>'
    ],
    correct: 'D'
  },
  //question 2
  {
    question:"What is the correct syntax to use an external script called “new.js?”",
    answers: [
      'A: <script src="new.js">',
      'B: <script name="new.js">',
      'C: <script href="new.js">',
      'D: <script content="new.js">'
    ],
    correct: 'A'
  },
  //question 3
  {
    question:"How do you declare a JavaScript variable x?",
    answers: [
      'A: define x;',
      'B: variable x;',
      'C: var x;',
      'D: def x;'
    ],
    correct: 'C'
  },
  //question 4
  {
    question:"When we don’t assign a value to a variable it will be?",
    answers: [
      'A: null',
      'B: undefined',
      'C: ""',
      'D: NaN'
    ],
    correct: 'B'
  },
    //question 5
    {
      question:"To add an element to the end of an array you use:",
      answers: [
        'A: pop()',
        'B: add()',
        'C: push()',
        'D: addToEnd()'
      ],
      correct: 'C'
  },
    //question 6
    {
      question:"A string can be converted to an array using which method:",
      answers: [
        'A: split()',
        'B: slice()',
        'C: splice()',
        'D: piece()'
      ],
      correct: 'A'
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

// display questions and answer function
function displayQuestions(){
  console.log('index is ' + questionIndex);
  //check timer and available questions
  if (timeCount === 0 || questionIndex >= 6) {
    return endQuiz()
  }
 
  //display questions and answers
  else { 
    displayQuestion.innerText = javascriptQuestions[questionIndex].question;

    var currentAnswers = javascriptQuestions[questionIndex].answers;
    for (var i = 0; i<displayAnswers.length;i++){
    displayAnswers[i].innerText = currentAnswers[i];
    }
  }
}

//add event listener to get the user's answer
function checkAnswer(event){

  var answerChosen = event.target;
  const selectedAnswer = answerChosen.dataset['number'];
  console.log(timeCount);
  if (timeCount === 0 || questionIndex >= javascriptQuestions.length){
    return endQuiz();
  }

  else if (selectedAnswer === javascriptQuestions[questionIndex].correct){
      scoreCount = scoreCount + 100;
  }
  else {
    timeCount = timeCount - 5;
    console.log(timeCount);
  }

  questionIndex++;
  displayQuestions();
};

//count down timer
function countDownTimer(){

  var timeInterval = setInterval(function() {
    if (timeCount > 0) {

      timeCount--;
      countDownTime.innerText = timeCount + ' s';
    }

    else if (timeCount === 0) {
      timeCount = 0;
      countDownTime.innerText = timeCount;
      endQuiz();
    }      
  }, 1000);

}



function endQuiz(){

  finalScore.innerText ="Your final score is: " + scoreCount + " (out of 600)"
  document.getElementById("quiz").style.display = "none";
  document.getElementById("end-page").style.display = "flex";

}

function saveResults(){


}









//event listener for start button, answer buttons, and saveButton
startButton.addEventListener('click', startGame);
answerButton[0].addEventListener('click', checkAnswer);
answerButton[1].addEventListener('click', checkAnswer);
answerButton[2].addEventListener('click', checkAnswer);
answerButton[3].addEventListener('click', checkAnswer);
saveButton.addEventListener('click',saveResults)