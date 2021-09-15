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
// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

// subtracting from page and showing it to webpage

function countDown() {
  startingSeconds--;
  console.log(startingSeconds);
  countDownEl.innerText = startingSeconds;
  if (startingSeconds <= 0) {
    clearInterval(timerID);
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
    console.log(button);

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
  }, 500)
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
    question: "Placeholder 1",
    answer: [
      { text: "Placeholder", correct: true },
      { text: "Placeholder", correct: false },
      { text: "Placeholder", correct: false },
      { text: "Placeholder", correct: false },
    ],
  },

  {
    question: "Placeholder 2",
    answer: [
      { text: "Placeholder", correct: true },
      { text: "Placeholder", correct: false },
    ],
  },

  {
    question: "Placeholder 3",
    answer: [
      { text: "Placeholder", correct: true },
      { text: "Placeholder", correct: false },
    ],
  },

  {
    question: "Placeholder 4",
    answer: [
      { text: "Placeholder", correct: true },
      { text: "Placeholder", correct: false },
    ],
  },
];


// debug why its not showing the wrong answers when it red. Figure out 
// Keep track of the correct answer 
// wrong answer take time off the clock startingseconds = startingSeconds -2 
// End page See README 
// Send link to REPO push it first 
