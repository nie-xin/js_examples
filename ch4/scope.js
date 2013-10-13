var color = "blue";

function changeColor() {
	// if (color === "blue") {
	// 	color = "red";
	// } else {
	// 	color = "blue";
	// }
	var anotherColor = "red";

	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		console.log(tempColor);
		console.log(anotherColor);
		console.log(color);
	}

	swapColors();
}

changeColor();
console.log(color);
