// VARIABLES
var newTotal = 0;

var gem1 = 1;
var gem2 = 5;
var gem3 = 10;
var gem4 = 2;

var scoredGems = $('#score-card');

var wins = 0;
var losses = 0;

var scoredWins = document.getElementById("wins");
var scoredLost = document.getElementById("losses");

// -----------------------------------------
// COMPUTER SCORE
let compChoice = gameRandom();
console.log(compChoice)

// function for computer to choose a number
function gameRandom() {
    var index = [Math.floor(Math.random() * 51)];
    return index;
}

$("#number-to-guess").text(compChoice);


// -----------------------------------------
// WIN - LOSE COMPARISION 

function winLoss(result) {
if (compChoice == newTotal) { //if Number generated by game = score from selected gems
    console.log('winning?', wins, compChoice)
    wins++;
    scoredWins.textContent = wins; //increase wins on score board (when wins = total selected gems)
    compChoice = gameRandom(); //after winning - generate new random letter (start new game)
    newTotal = 0;
    alert("YOU WON!");
}
else if (newTotal > compChoice) { //if selected gem # is greater than random number generated
    losses++;
    scoredLost.textContent = losses; // increase lost on score board
    compChoice = gameRandom();
    newTotal = 0;
    alert("YOU LOST!");
}
else{
    newTotal; //need to add another factor to continue guessing
}
}

// -----------------------------------------
// IMAGE ON CLICK - INCREASING CLICK SCORE


$("#gem-1").on("click", function () {
    newTotal += gem1;
    $("#score-card").text(newTotal);
    winLoss()
});

$("#gem-2").on("click", function () {
    newTotal += gem2;
    $("#score-card").text(newTotal);
    winLoss()
});

$("#gem-3").on("click", function () {
    newTotal += gem3;
    $("#score-card").text(newTotal);
    winLoss()
});

$("#gem-4").on("click", function () {
    newTotal += gem4;
    $("#score-card").text(newTotal);
    winLoss()
});



