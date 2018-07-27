//I will start with writing an object for holding all the questions and the answers for the game.
//STarted with 3 questions to make it simpler I will add more as I continue
var questions = {
    q1: ["Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?", "Link"],
    q2: ["What is the name of the primary protangist of the God of War Series?", "Kratos"],
    q3: ["In the war game Homefront, who is the enemy Country?", "North Korea"],
};
//These are the variable that will hold my answers and time limit
var time = 20;
var correct;
var wrong;
var unanswered;

//This function will start my game
function startGame() {

};
//this function has the button I created on html start the game
function beginGame(){
    $("button").click(function(){
        $("#begin").remove();
    });
};



// This function is used to make the button disappear when clicked and the questions will pop up in its palce
//  document.getElementById('begin').addEventListener("click", myFunction);
// function myFunction() {
//     var beginGame = document.getElementById("begin");
//     if (beginGame.style.display === "none") {
//         beginGame.style.display = "block";
//     } else {
//         beginGame.style.display = "none";
//     }
// }