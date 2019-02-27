// Initialize variables
var wins = 0;
var losses = 0;
var totalScore = 0;
// Picks random target number between 19 and 120
var targetScore = randomNumber(19, 120);
$("#targetScore").text(targetScore);
$("#totalScore").text(totalScore);
// Gives each crystal a random number between 1 and 12
var clearNumber = randomNumber(1, 12);
var greenNumber = randomNumber(1, 12);
var pinkNumber = randomNumber(1, 12);
var yellowNumber = randomNumber(1, 12);

console.log(clearNumber);
console.log(greenNumber);    //To see values of gems
console.log(pinkNumber);
console.log(yellowNumber);

// Function to generate a random number between "a" and "b"
function randomNumber(a, b) {
    return Math.floor(Math.random() * (a - b)) + b;
};

// Function to update and reset scores
function update() {
    totalScore = 0;
    targetScore = randomNumber(19, 120);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#targetScore").text(targetScore);
    $("#totalScore").text(totalScore);
    clearNumber = randomNumber(1, 12);
    greenNumber = randomNumber(1, 12);
    pinkNumber = randomNumber(1, 12);
    yellowNumber = randomNumber(1, 12);

    console.log("New values are: ")
    console.log(clearNumber);        //To see new values of gems
    console.log(greenNumber);
    console.log(pinkNumber);
    console.log(yellowNumber);
}

// Adding values to total score depending on which gem was clicked
$("#gem1").click(function () {
    totalScore += clearNumber;
    $("#totalScore").text(totalScore);
    console.log("New total is " + totalScore);
    if (totalScore === targetScore) {
        alert("Nice job! Try to reach the new target score.")
        wins++;
        update();
    }
    else if (totalScore > targetScore) {
        alert("You went over the target score! Try again.")
        losses++;
        update();
    }
});

$("#gem2").click(function () {
    totalScore += greenNumber;
    $("#totalScore").text(totalScore);
    console.log("New total is " + totalScore);
    if (totalScore === targetScore) {
        alert("Nice job! Try to reach the new target score.")
        wins++;
        update();
    }
    else if (totalScore > targetScore) {
        alert("You went over the target score! Try again.")
        losses++;
        update();
    }
});

$("#gem3").click(function () {
    totalScore += pinkNumber;
    $("#totalScore").text(totalScore);
    console.log("New total is " + totalScore);
    if (totalScore === targetScore) {
        alert("Nice job! Try to reach the new target score.")
        wins++;
        update();
    }
    else if (totalScore > targetScore) {
        alert("You went over the target score! Try again.")
        losses++;
        update();
    }
});

$("#gem4").click(function () {
    totalScore += yellowNumber;
    $("#totalScore").text(totalScore);
    console.log("New total is " + totalScore);
    if (totalScore === targetScore) {
        alert("Nice job! Try to reach the new target score.")
        wins++;
        update();
    }
    else if (totalScore > targetScore) {
        alert("You went over the target score! Try again.")
        losses++;
        update();
    }
});








