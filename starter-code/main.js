console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var board = document.getElementById('game-board');

var createCards = function() {

var newCard = document.createElement('div');
newCard.className = 'card';
document.querySelector('game-board').appendChild(newCard);

};

var cardLoop = function() {
	var x = 4;
for (var i = 0; i < 4; i++) {
	createCards();

}

};

cardLoop();


/* if (cardTwo === cardFour) {
	window.alert("You found a match!");
} else {
	window.alert("Sorry, try again");
};

if (cardOne === cardTwo) {
	window.alert("You found a match!");
} else {
	window.alert("Sorry, try again");
};
*/




