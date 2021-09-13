// Global 
const startButton = document.getElementById ('start-btn');
const nextButton = document.getElementById ('next-btn');
const questionContainerElements = document.getElementById('question-container');
// Both will set to undefined 
let shuffledQuestions, currentQuestionIndex;
const questionEl = document.getElementById ('question');
const answerButtonEL = document.getElementById('answer-buttons');
let correct = document.getElementById('btn.correct');
const countdownEL = getElementById ('countdown');
const startingSeconds = 60;
let time = startingSeconds * 1;

setInterval(function(){ alert("Popup window!"); }, 500);

// Timer function 🚫
setInterval(updateCountDown, 1000);

function updateCountDown() {
    let seconds = Math.floor(time)

    countdownEL.innerHTML = seconds;
    time--;

}

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
console.log ('Started');
// startButton.classlist.add('hide')
shuffledQuestions = questions.sort(()=> Math.random() -.5)
currentQuestionIndex = 0
// questionContainerElements.classList.remove('remove')
setNextQuestion()
}


function setNextQuestion() {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionEl.innerText = question.question
question.answer.forEach(answer => {
const button = document.createElement ('button')
button.innerText = answer.text
button.classList.add('btn')
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer )
answerButtonEL.appendChild(button)
})
} 

function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonEL.firstChild) {
    answerButtonEL.removeChild (answerButtonEL.firstChild)
    }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonEL.children).forEach(button => {
 setStatusClass(button, button.dataset.correct) 
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
} else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct){
clearStatusClass(element)
if (correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element) {
    if (correct) {
        element.classList.remove('correct')
    } else {
        element.classList.remove('wrong')
    }
}



// // Questions array 
const questions = [
{
    question: "Placeholder 1",
    answer: [
        { text: "Placeholder", correct: true},
        {text: "Placeholder", correct: false}
    ]
},

{
    question: "Placeholder 2",
    answer: [
        { text: "Placeholder", correct: true},
        {text: "Placeholder", correct: false}
    ]
},

{
    question: "Placeholder 3",
    answer: [
        { text: "Placeholder", correct: true},
        {text: "Placeholder", correct: false}
    ]
},

{
    question: "Placeholder 4",
    answer: [
        { text: "Placeholder", correct: true},
        {text: "Placeholder", correct: false}
    ]
}

]




