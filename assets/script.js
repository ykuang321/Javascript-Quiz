//declare variables
const startButton = document.getElementById("start-btn");
const answerButton = document.getElementsByClassName("answer");
const saveButton = document.getElementById("save-btn");
const viewScoreList = document.getElementById("view-score");
const returnStart1 = document.getElementById("return-btn1");
const returnStart2 = document.getElementById("return-btn2");
const clearScore = document.getElementById("clear-btn");



const countDownTime = document.getElementById("timer");

const displayQuestion = document.getElementById("question");
const displayAnswerResult = document.getElementById("answerResults");
const finalScore = document.getElementById("final-score");



var displayAnswers = document.querySelectorAll(".answer");
var questionIndex = 0;
var timeCount = 60;
var scoreCount = 0;
var timeInterval;




//declare an array of object for the questions and answers
const javascriptQuestions = [
  //question 1
  {
    question:"Q1: Inside which HTML element do we put the JavaScript?",
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
    question:"Q2: What is the correct syntax to use an external script called “new.js?”",
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
    question:"Q3: How do you declare a JavaScript variable x?",
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
    question:"Q4: When we don’t assign a value to a variable it will be?",
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
      question:"Q5: To add an element to the end of an array you use:",
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
      question:"Q6: A string can be converted to an array using which method:",
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

document.getElementById("quiz").style.display = "flex";
document.getElementById("start-page").style.display = "none";
document.getElementById("end-page").style.display = "none";
document.getElementById("score-list-page").style.display = "none";

countDownTimer();
displayQuestions();
}

// display questions and answer function
function displayQuestions(){

  //check timer and available questions
  if (timeCount === 0 || questionIndex >= 6) {
    quizComplete = true;
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

  //add even listener to get the user's answer
  answerButton[0].addEventListener('click', checkAnswer);
  answerButton[1].addEventListener('click', checkAnswer);
  answerButton[2].addEventListener('click', checkAnswer);
  answerButton[3].addEventListener('click', checkAnswer);
}



function checkAnswer(event){
  //remove event listener to avoid user accidentally click the answer again while waiting 
  answerButton[0].removeEventListener('click', checkAnswer);
  answerButton[1].removeEventListener('click', checkAnswer);
  answerButton[2].removeEventListener('click', checkAnswer);
  answerButton[3].removeEventListener('click', checkAnswer);
  
  var answerChosen = event.target;
  const selectedAnswer = answerChosen.dataset['number'];
  
  if (timeCount === 0 || questionIndex >= javascriptQuestions.length){
    return endQuiz();
  }

  else if (selectedAnswer === javascriptQuestions[questionIndex].correct){
      scoreCount = scoreCount + 100;
      displayAnswerResult.innerText = "Correct"
      document.getElementById("answerResults").style.display = "block";
  }
  else {
    timeCount = timeCount - 5;
    console.log(timeCount);
    displayAnswerResult.innerText = "Wrong, the correct answer is " + javascriptQuestions[questionIndex].correct
    document.getElementById("answerResults").style.display = "block";
  }

  // 2 seconds delay to display the results  
  setTimeout(() => {
    questionIndex++;
    document.getElementById("answerResults").style.display = "none";
    displayQuestions();
  }, 0)

};

//count down timer
function countDownTimer(){

  timeInterval = setInterval(function() {
    if (timeCount > 0) {
      timeCount--;
      countDownTime.innerText = timeCount + ' s';
    }

    else if (timeCount === 0 || quizComplete) {
      timeCount = 0;
      countDownTime.innerText = timeCount;
      endQuiz();
    }      
  }, 1000);

}


































//end quiz 
function endQuiz(){

  document.getElementById("end-page").style.display = "flex";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("start-page").style.display = "none";
  document.getElementById("score-list-page").style.display = "none";

  finalScore.innerText ="Your final score is: " + scoreCount + " (out of 600)";
  clearInterval(timeInterval);

}



var initial = document.querySelector("#initial-text");
var scoreList = document.querySelector("#score-list");

var highScore =[];

function saveResults(event){

  event.preventDefault();

  var highScoreText = initial.value.trim() + " - " + scoreCount;
  console.log(highScoreText);

  if(highScoreText === "") {
    return;
  }

   // Add new high score to high score list array, and then clear the input
  highScore.push(highScoreText);
  initial.value ="";

  localStorage.setItem("scoreList", JSON.stringify(highScore));
  
  viewScore();
}

function viewScore(){

  document.getElementById("score-list-page").style.display = "flex";
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("end-page").style.display = "none";
  
  // Clear todoList element and update todoCountSpan
  scoreList.innerHTML = "";

  // Render a new li for each score
  for (var i = 0; i < highScore.length; i++) {
    var highScoreTemp = highScore[i];

    var li = document.createElement("li");
    li.textContent = highScoreTemp;
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }


}


function init() {
  // Get stored score from localStorage
  var storedScore = JSON.parse(localStorage.getItem("scoreList"));

  // If todos were retrieved from localStorage, update the high Score array to it
  if (storedScore !== null) {
    highScore = storedScore;
  }

  // This is a helper function that will render todos to the DOM
  viewScore();
}







function clearScoreList () {


  highScore.splice(0, highScore.length);


}


function endGame(){

  console.log("hell yeah");
  document.getElementById("quiz").style.display = "none";
  document.getElementById("start-page").style.display = "block";
  document.getElementById("end-page").style.display = "none";
  document.getElementById("score-list-page").style.display = "none";
}

//event listener for buttons
startButton.addEventListener('click', startGame)
saveButton.addEventListener('click',saveResults)
viewScoreList.addEventListener('click', viewScore)
clearScore.addEventListener('click', clearScoreList)
returnStart1.addEventListener('click',endGame)
returnStart2.addEventListener('click',endGame)