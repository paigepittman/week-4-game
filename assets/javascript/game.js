

$(document).ready(function() {

//global variables

var random = "";

var startscore = 0;

var score = 0;

var wins = 0;

var losses = 0;

var pinkPoints = "";

var bluePoints = "";

var purplePoints = "";

var greenPoints = "";

var maxrand = 120

var minrand = 18

var max = 12

var min = 1


function start() {

// generate random number between 18-120

	random = Math.floor(Math.random() * (maxrand - minrand + 1)) + minrand;

// generate 4 random numbers between 1-12

	pinkPoints = Math.floor(Math.random() * (max - min + 1)) + min;

	bluePoints = Math.floor(Math.random() * (max - min + 1)) + min;

	purplePoints = Math.floor(Math.random() * (max - min + 1)) + min;

	greenPoints = Math.floor(Math.random() * (max - min + 1)) + min;

	$(".random").html(random);

// assign those numbers to images 


}

start();

$("#pink-crystal").on("click", function() {

	// var newscore = pinkPoints + score;

// if score === random, wins ++, reset

	score = pinkPoints + score;


	$(".points-box").html(score);


	if (score > random) {

		losses ++

		reset();
	}

	else if (score === random) {

		wins ++

		reset();
	}

});


	 


	console.log(random);
	console.log(losses);
	console.log(pinkPoints);
	console.log(score);





	


$("#blue-crystal").on("click", function() {

	score = bluePoints + score;

	$(".points-box").html(score);

// if score === random, wins ++, reset

	if (score > random) {

		losses ++

		reset();

	}


	else if	(score === random) {

		wins ++

		reset();
	}



	});

	console.log(bluePoints);


$("#purple-crystal").on("click", function() {

	score = purplePoints + score;

	$(".points-box").html(score);

// if score === random, wins ++, reset

	if (score > random) {

		losses ++

		reset();

	}


	else if	(score === random) {

		wins ++

		reset();
	}



	});

console.log(purplePoints);


$("#green-crystal").on("click", function() {

	score = greenPoints + score;

	$(".points-box").html(score);

// if score === random, wins ++, reset

	if (score > random) {

		losses ++

		reset();

	}


	else if	(score === random) {

		wins ++

		reset();
	}



	});



function reset() {

	score = 0;

	random = "";

	pinkPoints = "";

	bluePoints = "";

	purplePoints = "";

	greenPoints = "";

	$("points-box").empty();

	$("random").empty();

	start();

};



});

















// $("#green-crystal").on("click", function() {

// 	score = greenPoints + score;

// 	$("score").html(greenPoints + score);

// // if score === random, wins ++, reset

// 	if (score === random) {

// 		wins ++

// 		reset();
// 	}

// 	else if (score > random) {

// 		losses ++

// 		reset();
// 	}

// });

// $("#blue-crystal").on("click", function() {

// 	score = bluePoints + score;

// 	$("score").html(bluePoints + score);

// // if score === random, wins ++, reset

// 	if (score === random) {

// 		wins ++

// 		reset();
// 	}

// 	else if (score > random) {

// 		losses ++

// 		reset();
// 	}
// });

// $("#purple-crystal").on("click", function() {

// 	score = purplePoints + score;

// 	$("score").html(purplePoints + score);

// // if score === random, wins ++, reset

// 	if (score === random) {

// 		wins ++

// 		reset();
// 	}

// 	else if (score > random) {

// 		losses ++

// 		reset();
// 	};


// console.log("purple: " purplePoints);
// console.log("blue: " bluePoints);
// console.log("green: " greenPoints);
















