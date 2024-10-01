const numberElement = document.querySelector(".numbers");
let input = document.querySelector("input");

// input onClick eventlistener
input.addEventListener("keydown", function (event) {
	let value = 0;
	if (
		event.key === "Enter" ||
		event.code === "Enter" ||
		event.key === "Go" ||
		event.key === "Search" ||
		event.key === 13 ||
		event.code === 13
	) {
		value = this.value;
	}

	// An array for number items
	let arr = [];

	// Value from input read
	let numberReceived = value;
	let arrayNumber = numberReceived;
	let conditionalRendering = numberReceived;

	// Function to make deduction to reduce the input received and push into the array
	for (let i = 0; i < conditionalRendering; i++) {
		arrayNumber -= 1;
		arr.push(arrayNumber);
	}
	// The array needs to start from the value of input received
	arr = [numberReceived, ...arr];

	console.log(arr);

	// Using our array to display value on screen
	let index = 0;
	const showArrayItem = () => {
		if (index < arr.length) {
			numberElement.textContent = `00:${arr[index]}`;
			index++;
		} else {
			// numberElement.textContent = "Time is up";
		}
	};

	setInterval(showArrayItem, 1000);
});
