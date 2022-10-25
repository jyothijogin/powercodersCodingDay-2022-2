let quiz = [
    {
        question:"Which built-in method combines the text of two strings and returns a new string?",
        answers:["attach()","append()","concat()","None of the above"],
        correctAnswer:2
    },
    {
        question:"Which of the following function of Number object returns a string value version of the current number?",
        answers:["toPrecision()","toLocaleString()","toFixed()","toString()"],
        correctAnswer:3
    },
    {
        question:"Which of the following function of String object returns the calling string value converted to lower case?",
        answers:["toLowerCase()","toLocaleLowerCase()","substring()"],
        correctAnswer:0
    },
    {
        question:"Which of the following function of Array object joins all elements of an array into a string?",
        answers:["concat()","join()","pop()","map()"],
        correctAnswer:1
    },
    {
        question:"Which of the following function of Array object reverses the order of the elements of an array?",
        answers:["reduceRight()","reduce()","push()","reverse()"],
        correctAnswer:3
    }
]

const NUMBEROFQUESTIONS = quiz.length;
let questionOnTheScreen = -1;
let count = 0;
let score = 0;

let questionSection = document.getElementById("questions");
let questionTxt = document.getElementById("questionTxt");
let message = document.getElementById("message");
let scoreBoard = document.getElementById("scoreBoard");
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
    message.innerHTML = "";

    do {
        randomNumber = generateRandomIndex();
        randomQuestion = quiz[randomNumber];
    } while (randomQuestion.shownBefore);
    
    randomQuestion.shownBefore = true;
    questionOnTheScreen = randomNumber;
    questionTxt.innerHTML = randomQuestion.question;
    let answer;
    answersArticle.innerHTML = "";
    count++;
    for (let i = 0; i < randomQuestion.answers.length; i++) {
        answer = document.createElement("article");
        answer.innerHTML = randomQuestion.answers[i];
        answer.addEventListener("click", ()=>{answerClicked(i)});
        answersArticle.appendChild(answer);
    }
}

function answerClicked(index){
    if(quiz[questionOnTheScreen].correctAnswer == index){
        message.innerText = "Correct Answer 🤩";
        score+= 10;
    }
    else {
        message.innerText = "Oopps! Wrong Answer 🥺";
    }
}
function showScore(){
    let msg = "";
    let percentage = score/NUMBEROFQUESTIONS * 10;
    if(percentage <30){
        msg = "Good luck next time!"
    }   
    else if(percentage<70){
        msg = "Almost perfect!";
    }else{
        msg = "You are perfection!";
    }
    scoreBoard.innerText = "Your Final Score is " + score+" - "+msg;
}
function nextClicked(){
    if(count != NUMBEROFQUESTIONS){
        showQuestion();
    }else if(count == NUMBEROFQUESTIONS){
        //questionSection.setAttribute("style","display:none");
        showScore();
    }   
}

showQuestion();