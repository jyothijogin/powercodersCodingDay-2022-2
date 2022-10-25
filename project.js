let quiz = [
    {
        question:"question1",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2,
        shownBefore:false
    },
    {
        question:"question2",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:3,
        shownBefore:false
    },
    {
        question:"question3",
        answers:["answer1","answer2","answer3"],
        correctAnswer:2,
        shownBefore:false
    },
    {
        question:"question4",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2,
        shownBefore:false
    },
    {
        question:"question5",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2,
        shownBefore:false
    }
]

const NUMBEROFQUESTIONS = quiz.length;
let questionOnTheScreen = -1;

let questionSection = document.getElementById("questions");
let questionTxt = document.getElementById("questionTxt");
let answersTxt = document.querySelectorAll("#answers article");
let answersArticle = document.getElementById("answers");

function generateRandomIndex(){
    let x = Math.floor(Math.random() * NUMBEROFQUESTIONS);
    return x;
}

function showQuestion(){
    // if we get a random number already used we should generate again
    let randomNumber;
    let randomQuestion;
    do {
        randomNumber = generateRandomIndex();
        randomQuestion = quiz[randomNumber];
    } while (randomQuestion.shownBefore);
    
    randomQuestion.shownBefore = true;
    questionOnTheScreen = randomNumber;
    questionTxt.innerHTML = randomQuestion.question;
    let answer;
    for (let i = 0; i < randomQuestion.answers.length; i++) {
        answer = document.createElement("article");
        answer.innerHTML = randomQuestion.answers[i];
        answer.addEventListener("click", ()=>{answerClicked(i)});
        answersArticle.appendChild(answer);
    }
}

function answerClicked(index){
    if(quiz[questionOnTheScreen].correctAnswer == index){
        alert("correct");
    }
    showScore();
}
function nextClicked(){
    showQuestion();
}

function showScore(){

}

showQuestion();