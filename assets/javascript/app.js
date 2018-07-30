//I will start with writing an object for holding all the questions and the answers for the game.
//STarted with 3 questions to make it simpler I will add more as I continue
var questions = [{
    question: ["Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?"],
    answerChoices: ["Link,   ", "  Zelda,  ", "  Peter Pan ", " Robin Hood"],
    answer: 0,
},{

    question: ["What is the name of the primary protangist of the God of War Series?", "Kratos"],
    answerChoices: ["Zeus ", " Atreus ", " Kratos", " Ares"],
    answer: 2,
},{
    question: ["In the war game Homefront, who is the enemy Country?", "North Korea"],
    answerChoices: ["Russia ", " North Korea ", " China", " Iran"],
    answer: 1,
   
}
];

 

//These are the variable that will hold my answers and time limit
var time = 21;
var correct;
var wrong;
var unanswered;
var intervalId;
var activeQuestion = 0;
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
    run();
    decrement();
    //Will add function to start the game
    //startGame()
}
    document.getElementById("startOver").addEventListener("click", resetBtn);
    function resetBtn(){
        var resetBtn = document.getElementById("startOver");
        if (resetBtn.style.display === "none") {
            resetBtn.style.display = "block";
        } else {
            reset.Btn.style.display = "none";
        }
    
    //here will add function to start the game and restart the game
    //startGame()
     }

    //This fuction will create a new question when one is answered 
     function createQuestion(){
         document.getElementById("message").innerHTML = "";
         document.getElementById("correctAnswer").innerHTML = "";
         answer = true;
        

     }

     $("#activeQuestion").html("Question # " + (activeQuestion +1) + " / " + questions.length);
     $(".question").html("<h2>" + questions[activeQuestion].question + "<h2>");

     //This loop will loop through the answers and create each answer as a way to pick the answer by picking the answer.
     for (var  i = 0; i < 4; i++){
         var userPick = $("<div>");
         userPick.text(questions[activeQuestion].answerChoices[i]);
         console.log((questions[activeQuestion].answerChoices[i]))
         userPick.attr("data-index" , i);
         userPick.addClass("choice");
         $(".answerChoices").append(userPick);
         console.log(userPick);
         



     }






    //this is just a test, i will replace with first question or questions
    // $("#question").html(questions[0].question1 + " <hr><br>" + questions[0].answerChoices1);
    
   
    
    
  