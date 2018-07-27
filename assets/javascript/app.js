//I will start with writing an object for holding all the questions and the answers for the game.
//STarted with 3 questions to make it simpler I will add more as I continue
var questions = {
    q1: ["Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?"],
    a1: ["Link ", " Zelda ", ' Peter Pan'],
    q2: ["What is the name of the primary protangist of the God of War Series?", "Kratos"],
    a2: ["Zeus ", " Atreus ", " Kratos"],
    q3: ["In the war game Homefront, who is the enemy Country?", "North Korea"],
    a3: ["Russia ", " North Korea ", " China"],
};


//These are the variable that will hold my answers and time limit
var time = 21;
var correct;
var wrong;
var unanswered;
var intervalId;
var questions;

//This function will start my game
function startGame() {

};
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
    $("#replace").html(questions.q1 + "<div><br>" + questions.a1);
    run();
    decrement();
    
}

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