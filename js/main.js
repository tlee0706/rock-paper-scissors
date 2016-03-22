var computerChoice;

// Generates random computer choice
function computerPlay() {
 var randomNum = getRandomInt(0, 2);
 var choices = ["rock", "paper", "scissors"];
 
 computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Demonstration of how to generate random computer choice.
computerPlay();
console.log(computerChoice);

$(".play-button").click(startGame);

   function startGame() {
       event.preventDefault();
       console.log("click play button");

   $(".game-container").show();
   
   $(".play-button").hide();
   $(".play-again").hide();

   }


$(".rock").click(chooseRock);

   function chooseRock() {

       console.log("choose rock");
       $(".user-choice").text("rock");
       $(".play-again").show();
       $(".choices-container").hide();
       $(".results-container").show();
      
       if (computerChoice === "rock") {

$(".computer-choice").text(computerChoice);
$(".results").text("Draw!")
}

else if (computerChoice === "scissors") {

$(".computer-choice").text(computerChoice);
$(".results").text("Win! Computer Picked Scissors!")
}

else if (computerChoice === "paper") {

$(".computer-choice").text(computerChoice);
$(".results").text("Loose! Computer Picked Paper!")
}

   }


$(".paper").click(choosePaper);

   function choosePaper() {

       console.log("choose paper");
       $(".play-again").show();
       $(".user-choice").text("paper");
       $(".choices-container").hide();
       $(".results-container").show();

       if (computerChoice === "paper") {

$(".computer-choice").text(computerChoice);
$(".results").text("Draw!")
}

else if (computerChoice === "scissors") {

$(".computer-choice").text(computerChoice);
$(".results").text("Loose! Computer Picked Scissors!")
}

else if (computerChoice === "rock") {

$(".computer-choice").text(computerChoice);
$(".results").text("Win! Computer Picked Rock!")
}

   }

$(".scissors").click(chooseScissors);

   function chooseScissors() {

       console.log("choose scissors");
       $(".play-again").show();
       $(".user-choice").text("scissors");
       $(".choices-container").hide();
       $(".results-container").show();
      
       if (computerChoice === "scissors") {

$(".computer-choice").text(computerChoice);
$(".results").text("Draw!")
}


else if (computerChoice === "paper") {

$(".computer-choice").text(computerChoice);
$(".results").text("Win! Computer Picked Paper!")
}

else if (computerChoice === "rock") {

$(".computer-choice").text(computerChoice);
$(".results").text("Loose! Computer Picked Rock!")
}

   }

$(".play-again").click(restartGame);

   function restartGame() {
       event.preventDefault();
       console.log("restart game");
       computerPlay();
       $(".computer-choice").empty();
		$(".results").empty();
		$(".user-choice").empty();
		$(".play-again").hide();
		$(".choices-container").show();
		$(".results-container").hide();
}