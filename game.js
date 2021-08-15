const question = document.querySelector('#question'); 
const choices = Array.from(document.querySelectorAll('.choice-text')); 
const progressText = document.querySelector('#progressText'); 
const scoreText = document.querySelector('#score'); 
const progressBarFull = document.querySelector('#progressBarFull');  

let currentQuestion = {}
let acceptingAnswers = true 
let score = 0 
let questionCounter = 0 
let availableQuestions = {}  

let questions = [
{ 
    question: "Which country won Euro 2004?", 
    choice1: 'Italy', 
    choice2: 'Germany',
    choice3: 'Greece', 
    choice4: 'France', 
    answer: 3, 
}, 

{ 
    question: "Who scored the fatest goal in European Championship history", 
    choice1: 'Dmitri Kirichenko', 
    choice2: 'Robert Lewandowski',
    choice3: 'Luke Shaw', 
    choice4: 'Cristiano Ronaldo', 
    answer: 1, 
}, 

{ 
    question: "Which country did England beat to reach the Quarter Finals of Euro 2020", 
    choice1: 'Ukraine', 
    choice2: 'Germany',
    choice3: 'Denmark', 
    choice4: 'Croatia', 
    answer: 2, 
}, 

{ 
    question: "Who is the top goal scorer in the history of the European Championship?", 
    choice1: 'Alan Shearer', 
    choice2: 'Cristiano Ronaldo',
    choice3: 'Antoine Griezmann', 
    choice4: 'Ruud van Nistelrooy', 
    answer: 2, 
},

{ 
    question: "Where was Euro 1996 held?", 
    choice1: 'France', 
    choice2: 'Italy',
    choice3: 'England', 
    choice4: 'Belgium', 
    answer: 3, 
}, 


]  

const SCORE_POINTS = 10 
const MAX_QUESTIONS = 5 

startGame = () => { 
    questionCounter = 0
    score = 0 
    availableQuestions = [...questions]
    getNewQuestion()
}  

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    } 

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random()= availableQuestions.length)
    currentQuestion = availableQuestions(questionIndex)
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset('number')
        choice.innerText = currentQuestion('choice' + number)
    })
  
    availableQuestions.splice(questionsIndex, 1) 

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if(!acceptingAnswers) return

      acceptingAnswers = false 
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset('number')  

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

      if (classToApply === 'correct') {
          incrementScore(SCORE_POINTS)
      } 

      selectedChoice.parentElement.classList.add(classToApply) 

      setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply)
          getNewQuestion()
      }, 1000)
    })
}) 

incrementScore = num => { 
    score +=num 
    scoreText.innerText = score
}

startGame()