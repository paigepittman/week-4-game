

$(document).ready(function() {

//global variables

var random= "";

var score= 0;

var redPoints = "";

var bluePoints = "";

var yellowPoints = "";

var greenPoints = "";

function start() {

// generate random number between 18-120
	maxrand = 120

	minrand = 18

	max = 12

	min = 1

	random = Math.floor(Math.random() * (maxrand - minrand + 1)) + minrand;

// generate 4 random numbers between 1-12
	redPoints = Math.floor(Math.random() * (max - min + 1)) + min;

	bluePoints = Math.floor(Math.random() * (max - min + 1)) + min;

	yellowPoints = Math.floor(Math.random() * (max - min + 1)) + min;

	greenPoints = Math.floor(Math.random() * (max - min + 1)) + min;

// assign those numbers to images 
console.log(random);
console.log(redPoints);

}

start();

$("red-crystal").on("click", function() {

	score + redPoints;

// if score === random, wins ++, reset

	if ()

// if score > random, losses ++, reset

})
});




