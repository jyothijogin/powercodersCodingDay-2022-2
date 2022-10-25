let quiz = [
    {
        question:"question1",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2
    },
    {
        question:"question2",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:3
    },
    {
        question:"question3",
        answers:["answer1","answer2","answer3"],
        correctAnswer:2
    },
    {
        question:"question4",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2
    },
    {
        question:"question5",
        answers:["answer1","answer2","answer3","answer4"],
        correctAnswer:2
    }
]

const NUMBEROFQUESTIONS = quiz.length;
let questionIsShown = -1;

let questionSection = document.getElementById("questions");
let questionTxt = document.getElementById("questionTxt");
let answersTxt = document.querySelectorAll("#answers article");

function generateRandomIndex(){
    let x = Math.floor(Math.random() * NUMBEROFQUESTIONS);
    return x;
}

function showQuestion(){
    // if we get a random number already used we should generate again
    let x = generateRandomIndex();
    let randomQuestion = quiz[x];
    questionIsShown = x;
    questionTxt.innerHTML = randomQuestion.question;
    for (let i = 0; i < randomQuestion.answers.length; i++) {
        answersTxt[i].innerHTML = randomQuestion.answers[i];
        answersTxt[i].addEventListener("click", ()=>{answerClicked(i)});
    }
}

function answerClicked(index){
    if(quiz[questionIsShown].correctAnswer == index){
        alert("correct");
    }
    showScore();
}

function showScore(){

}

showQuestion();