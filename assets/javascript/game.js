// Initialize variables
var wins = 0;
var losses = 0;
var clearGem = document.querySelector("#gem1")
var greenGem = document.querySelector("#gem2")
var pinkGem = document.querySelector("#gem3")
var yellowGem = document.querySelector("#gem4")
// Picks random target number between 20 and 100
var targetScore = (Math.floor(Math.random() * 81) + 20);
var totalScore = 0;
$("#targetScore").text(targetScore);
$("#totalScore").text(totalScore);
// Gives each crystal a random number between 1 and 12
var clearNumber = Math.floor(Math.random() * 12) + 1;
var greenNumber = Math.floor(Math.random() * 12) + 1;
var pinkNumber = Math.floor(Math.random() * 12) + 1;
var yellowNumber = Math.floor(Math.random() * 12) + 1;

console.log(clearNumber);
console.log(greenNumber);
console.log(pinkNumber);
console.log(yellowNumber);

// Function to update and reset scores
function update() {
    totalScore = 0;
    targetScore = (Math.floor(Math.random() * 151) + 50);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#targetScore").text(targetScore);
    $("#totalScore").text(totalScore);
    clearNumber = Math.floor(Math.random() * 12) + 1;
    greenNumber = Math.floor(Math.random() * 12) + 1;
    pinkNumber = Math.floor(Math.random() * 12) + 1;
    yellowNumber = Math.floor(Math.random() * 12) + 1;
    console.log(clearNumber);
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







