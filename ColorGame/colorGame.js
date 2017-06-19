var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayedColor = document.querySelector("#displayedColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i =0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numberOfSquares = 3;
		} else {
			numberOfSquares = 6;
		}
		reset();
	});
}
}

function setUpSquares(){
	for (i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var selectedColor = this.style.background;
		if (pickedColor === selectedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(pickedColor);
			h1.style.background = pickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}
}



function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	displayedColor.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}


/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	displayedColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	displayedColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []

	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);


	return "rgb(" + r + ", " + g + ", " + b +")";
}