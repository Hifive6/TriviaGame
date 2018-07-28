//I will start with writing an object for holding all the questions and the answers for the game.
//STarted with 3 questions to make it simpler I will add more as I continue
var questions = [{
    question: ["Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?"],
    answerChoices: ["Link,   ", "  Zelda,  ", "  Peter Pan"],
    answer: 0,
},{

    question: ["What is the name of the primary protangist of the God of War Series?", "Kratos"],
    answerChoices: ["Zeus ", " Atreus ", " Kratos"],
    answer: 2,
},{
    question: ["In the war game Homefront, who is the enemy Country?", "North Korea"],
    answer: ["Russia ", " North Korea ", " China"],
    answer: 1,
}
];



//These are the variable that will hold my answers and time limit
var time = 21;
var correct;
var wrong;
var unanswered;
var intervalId;
var activeQuestion;
var selectAnswer;



//This function will start my game
function startGame() {


};

//Created a counter for my questions
function run(){
    clearInterval(intervalId);
    intervalID = setInterval(decrement, 1000 + 1);
}
function decrement(){
    time--;
    $("#counter").html("<h1>" + time + "<h1>");
    if(time === 0){
        stop(),
        alert ("next Question");
    }

    function stop(){
        clearInterval(intervalID);
    }
}   

 



// This function is used to make the button disappear when clicked and the questions will pop up in its palce
 document.getElementById('begin').addEventListener("click", myFunction);
function myFunction() {
    var beginGame = document.getElementById("begin");
    if (beginGame.style.display === "none") {
        beginGame.style.display = "block";
    } else {
        beginGame.style.display = "none";
    }
    //this is just a test, i will replace with first question or questions
    $("#question").html(questions[0].question1 + " <hr><br>" + questions[0].answerChoices1);
    
   
    run();
    decrement();
    
}   