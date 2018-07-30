//I will start with writing an object for holding all the questions and the answers for the game.
//STarted with 3 questions to make it simpler I will add more as I continue
var questions = [{
    question: ["Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?"],
    answerChoices: ["Link,   ", "  Zelda,  ", "  Peter Pan ", " Robin Hood"],
    answer: 0,
},{

    question: ["What is the name of the primary protangist of the God of War Series?"],
    answerChoices: ["Zeus ", " Atreus ", " Kratos", " Ares"],
    answer: 2,
},{
    question: ["In the war game Homefront, who is the enemy Country?"],
    answerChoices: ["Russia ", " North Korea ", " China", " Iran"],
    answer: 1,
   
}
];

var resultMessages = {
    correct: "You are Correct, Yay!",
    incorrect: "You are Incorrect, Sorry",
    endTime: "You have run out of time",
    finish: "Ok, That is all the question, lets see how you did!"

}

 

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
    userAnswer = true
}
function decrement(){
    time--;
    $("#counter").html("<h1>" + time + "<h1>");
    if(time < 1){
        clearInterval(intervalID);
        userAnswer = false
        alert ("next Question");
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
            resetBtn.style.display = "none";
        }
    
    //here will add function to start the game and restart the game
    //startGame()
     }

    //This fuction will create a new question when one is answered 
     //function createQuestion(){
       //  document.getElementById("message").innerHTML = "";
         //document.getElementById("correctAnswer").innerHTML = "";
         //answer = true;
        

     //}

     $("#activeQuestion").html("Question # " + (activeQuestion +1) + " / " + questions.length);
     $(".question").html("<h2>" + questions[activeQuestion].question + "<h2>");

     //This loop will loop through the answers and create each answer as a way to pick the answer by picking the answer.
     for (var  i = 0; i < 4; i++){
         var userPick = $("<button>");
         userPick.text(questions[activeQuestion].answerChoices[i]);
         
         userPick.attr("data-index" , i);
         userPick.addClass("choice text-info");
         $(".answerChoices").append(userPick);

     }
     //this function now stops the timer when you push on an answer
    $(".choice").on("click", function(){
        selectAnswer = $(this).data("index");
        console.log(selectAnswer);
        clearInterval(intervalID);    
    })


    function pageLayout(){
        clearQuestion()
        $("#activeQuestion").empty();
        $(".thisChoice").empty();
        $(".question").empty();

        var rightAnswers = questions[activeQuestion].answer;
        console.log(rightAnswers);

        if ((userPick == rightAnswers) && (userAnswer = true)){
            correct++;
            $("#message").html(resultMessages.correct);

        } else if ((userPick != rightAnswers) && (userAnswer = false)){
            incorrect++;
            $("#message").html(resultMessages.incorrect);
        }else{
            unanswered++;
            $("#message").html(resultMessages.endTime);
        }


        if(activeQuestion == (questions.length - 1)){
            //I have to set something up here so when all questions are answered the results page come out.
        }else{
            activeQuestion++;
            //I have to add something here dont know what though
        }
    };



    //this is just a test, i will replace with first question or questions
    // $("#question").html(questions[0].question1 + " <hr><br>" + questions[0].answerChoices1);
    
   
    
    
  