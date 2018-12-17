window.onload = function() {
    $("#start").on("click", gameStart);
};


var time = 10;
var intervalId;
var clockRunning = false;

function gameStart() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

       
    for (var i = 0; i < questions.length; i++) {

              

    $("#questions").append('<div class="font-weight-bold">' + (questions[i].quest) + "</div>");


    $("#questions").append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio1" value="choice1"><label class="form-check-label" for="inlineRadio1">' + questions[i].choices[0] + "</label>" + "</div>");
    $("#questions").append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio2" value="choice2"><label class="form-check-label" for="inlineRadio2">' + questions[i].choices[1] + "</label>" + "</div>");
    $("#questions").append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio3" value="choice3"><label class="form-check-label" for="inlineRadio3">' + questions[i].choices[2] + "</label>" + "</div>");
    $("#questions").append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio4" value="choice4"><label class="form-check-label" for="inlineRadio4">' + questions[i].choices[3] + "</label>" + "</div>");
    
       
  }
}
  //  The decrement function.
  function decrement() {
         time--;
        $("#time-left").html("<h2> Time Remaining: " + time + "</h2>");
       // if ($("#submitButton").on("click")) {
        //     stop();
        //     score();
        // }
        if (time === 0) {
        stop();
        score();
        }
    
} 

  //  The stop function
  function stop() {
      clearInterval(intervalId);
  };

  function score(){
    var userAnswer;
    var correctAnswer;
    var correct = 0;
    var incorrect = 0;
    var numberUnanswered = 0;

    for (var i = 0; i < questions.length; i++) {

        correctAnswer = questions[i].answer;
        userAnswer = $('input[name="inlineRadioOptions'+i+'"]:checked').val();
        console.log(userAnswer);
        console.log("Correct Answer "+ correctAnswer);

    if (userAnswer === correctAnswer) {
        correct++;
    } else if (userAnswer == undefined) {
        numberUnanswered++;
    } else  
        incorrect++;
    }

    $("#correct").text("Number correct: "+ correct);
    $("#wrong").text("Number incorrect: "+ incorrect);
    $("#notAnswered").text("Number unanswered: "+ numberUnanswered);
    console.log("Num correct " + correct);
    console.log("Num incorrect " + incorrect);
    console.log("Num unanswered " + numberUnanswered);
}  

// function gameEnd(){

// }


function submit() {
    $("#submitButton").on("click", gameEnd);
}


var questions = 

[{
    quest: "Who played Ross Geller?",
    choices: ["Brad Pitt", "David Schwimmer", "Matthew Perry", "Matt LeBlanc"],
    answer: "choice2",
},

{
    quest: "How many sisters does Joey Tribbiani have?",
    choices: [3, 5, 7, 9],
    answer: "choice3",
},

{
    quest: "Who played Phoebe's husband, Mike Hannigan?",
    choices: ["Brad Pitt", "Paul Rudd", "Hank Azaria", "George Clooney"],
    answer: "choice2",
},

{
    quest: "What does Ross say Rachel's trifle tastes like?",
    choices: ["Hands", "Feet", "Armpits", "Shampoo"],
    answer: "choice2",
},

{
    quest: "Which of these was not in Rachel's trifle?",
    choices: ["Jam", "Custard", "Peas & Onions", "Chicken"],
    answer: "choice4",
},

{
    quest: "What does Joey not share?",
    choices: ["Women", "Clothes", "Food", "Coffee"],
    answer: "choice3",
},

{
    quest: "Who got peed on after a jellyfish sting?",
    choices: ["Chandler", "Joey", "Monica", "Ross"],
    answer: "choice3",
},

{
    quest: "How many categories of towels does Monica have?",
    choices: [11, 9, 10, 8],
    answer: "choice1",
},

{
    quest: "What does Joey think coulis is?",
    choices: ["Lion", "Bear", "Duck", "Monkey"],
    answer: "choice4",
},



]

console.log(questions);