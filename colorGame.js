var numOfSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	/*      MODE BUTTONS      */
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			reset();
		});
	}	
}

function setupSquares(){
	for(var i = 0; i < square.length; i++) {
		// add click listeners to squares
		square[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
	//change the name of "Play Again?"
	resetButton.textContent = "New Colors";
	//change the color of h1 to default
	h1.style.backgroundColor = "steelblue";
	//erase span "Correct"
	messageDisplay.textContent = "";
};


/*        EASY MODE BUTTON !!!!!!!!!!!!!*/

// easyBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < square.length; i++){
// 		if(colors[i]) {
// 			square[i].style.backgroundColor = colors[i];
// 		} else {
// 			square[i].style.display = "none";
// 		}
// 	}
// });

//            HARD MODE BUTTON         

// hardBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < square.length; i++){
// 			square[i].style.backgroundColor = colors[i];
// 			square[i].style.display = "block";
// 		}
// });

/*           RESET BUTTON          */

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < square.length; i++)
	//change each color to match given color
	square[i].style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}