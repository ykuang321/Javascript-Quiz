//Variables
const startButton = document.getElementById("start-btn");
const answerButton = document.getElementsByClassName("answer");


const displayQuestion = document.getElementById("question");
var displayAnswers = document.querySelectorAll(".answer");
var questionIndex = 0;
//var currentAnswers =[];
var timerCount;





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
    
  questionIndex++;
  console.log('1questionIndex is ' + questionIndex);
  }

}


//add event listener to get the user's answer
function checkAnswer(event){
  if (timerCount === 0 || questionIndex >= javascriptQuestions.length){
    return endQuiz();
  }

  var answerChosen = event.target;
  const selectedAnswer = answerChosen.dataset['number'];
    if (selectedAnswer === javascriptQuestions[questionIndex].correct){
      console.log("correct");
    }

  displayQuestions();
};





function countDownTimer(){


}



function endQuiz(){

  alert("bye-bye")

}












answerButton[0].addEventListener('click', checkAnswer);
answerButton[1].addEventListener('click', checkAnswer);
answerButton[2].addEventListener('click', checkAnswer);
answerButton[3].addEventListener('click', checkAnswer);



startButton.addEventListener('click', startGame);