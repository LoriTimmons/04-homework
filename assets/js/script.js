// Global
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElements = document.getElementById("question-container");
// Both will set to undefined
let shuffledQuestions, currentQuestionIndex;
const questionEl = document.getElementById("question");
const answerButtonEL = document.getElementById("answer-buttons");
// let correct = document.getElementById("btn.correct");
const countDownEL = document.getElementById("countdown");
let startingSeconds = 5;
let time = startingSeconds * 1;
let countDownEl = document.getElementById("countdown");
// Creating but not def'ing it yet
let timerID;

startButton.addEventListener("click", startGame);


function countDown() {
  startingSeconds--;
  countDownEl.innerText = startingSeconds;
  if (startingSeconds <= 0) {
    clearInterval(timerID);
    document.getElementById('countdown').innerText = "Game Over";
  } 
  
}

function startGame() {
  console.log("Started");
  // Start timer
  countDownEl.innerText = startingSeconds;
  // This is in the SG function cause it starts when you hit the button
  timerID = setInterval(countDown, 1000);
  // startButton.classlist.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  // questionContainerElements.classList.remove('remove')
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    } 

    button.addEventListener("click", selectAnswer);
    answerButtonEL.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
//   nextButton.classList.add("hide");
  while (answerButtonEL.firstChild) {
    answerButtonEL.removeChild(answerButtonEL.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonEL.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // nextButton.classList.remove("hide");
    currentQuestionIndex++;
    setNextQuestion();
  }else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element, correct);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
  setTimeout(function(){
      clearStatusClass(element, correct)
  }, 500);
}


function clearStatusClass(element, correct) {
  if (correct) {
    element.classList.remove("correct");
  } else {
    element.classList.remove("wrong");
  }
}

// use a set timeout

// // Questions array
const questions = [
  {
    question: "Q1 What is a Function?",
    answer: [
      { text: "a set of statements that performs a task or calculates a value", correct: true },
      { text: "An junction", correct: false },
      { text: "property of an object", correct: false },
      { text: "an activity or purpose natural to or intended for a person or thing", correct: false },
    ],
  },

  {
    question: "Q2 When would you use a triple =?",
    answer: [
      { text: "to assign a value", correct: false },
      { text: "When comparing two values", correct: true },
      { text: "When something is identical", correct: false },
      { text: "To show a relation to a var", correct: false },
    ],
  },

  {
    question: "Q3 What is a string? ",
    answer: [
      { text: "Thread", correct: false },
      { text: "Number content ", correct: false },
      { text: "textual content", correct: true },
      { text: "Something used to make a dress", correct: false },
    ],
  },

  {
    question: "Q4 Why is JavaScript Fun?",
    answer: [
      { text: "Cause it makes my website cool", correct: false },
      { text: "Cause it's fun to say JavaScript", correct: false },
      { text: "Cause I can add interactivity to website ", correct: false },
      { text: "All of the above", correct: true},
    ],
  },
];

// To Do 
// debug why its not showing the wrong answers when it red. Figure out 
// Keep track of the correct answer 
// wrong answer take time off the clock startingseconds = startingSeconds -2 
// End page See README 
// Send link to REPO push it first 
