const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const fivePercent = document.getElementById("five-percent");
const tenPercent = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyFivePercent = document.getElementById("twenty-five-percent");
const fiftyPercent = document.getElementById("fifty-percent");
const customTip = document.getElementById("custom-tip");
const resetButton = document.getElementById("reset-button");
const peopleError = document.getElementById("people-error");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const form = document.getElementById("form");

var dollar = "&dollar;";

resetButton.addEventListener("click", reset);

function reset() {
	form.reset();
}

fivePercent.addEventListener("click", fivePercentFunction);

function fivePercentFunction(e) {
	//Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	//Toggle on/off tip button
	if (!fivePercent.classList.contains("active")) {
		fivePercent.classList.add("active");
	} else {
		fivePercent.classList.remove("active");
		tipAmount.innerHTML = dollar.concat("0.00");
		totalAmount.innerHTML = dollar.concat("0.00");
	}

	//The calculation
	if (fivePercent.classList.contains("active")) {
		peopleError.innerHTML = "";
		peopleError.style.margin = "0";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var fivePercentResult = (billInput.value * 0.05) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = fivePercentResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = fivePercentResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}

tenPercent.addEventListener("click", tenPercentFunction);

function tenPercentFunction() {
	//Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	//Toggle on/off tip button
	if (!tenPercent.classList.contains("active")) {
		tenPercent.classList.add("active");
	} else {
		tenPercent.classList.remove("active");
		tipAmount.innerHTML = dollar.concat("0.00");
		totalAmount.innerHTML = dollar.concat("0.00");
	}

	//The calculation
	if (tenPercent.classList.contains("active")) {
		peopleError.innerHTML = "";
		peopleError.style.margin = "0";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var tenPercentResult = (billInput.value * 0.1) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = tenPercentResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = tenPercentResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}

fifteenPercent.addEventListener("click", fifteenPercentFunction);

function fifteenPercentFunction() {
	//Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	//Toggle on/off tip button
	if (!fifteenPercent.classList.contains("active")) {
		fifteenPercent.classList.add("active");
	} else {
		fifteenPercent.classList.remove("active");
		tipAmount.innerHTML = dollar.concat("0.00");
		totalAmount.innerHTML = dollar.concat("0.00");
	}

	//The calculation
	if (fifteenPercent.classList.contains("active")) {
		peopleError.innerHTML = "";
		peopleError.style.margin = "0";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var fifteenPercentResult = (billInput.value * 0.15) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = fifteenPercentResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = fifteenPercentResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}

twentyFivePercent.addEventListener("click", twentyFivePercentFunction);

function twentyFivePercentFunction() {
	//Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	//Toggle on/off tip button
	if (!twentyFivePercent.classList.contains("active")) {
		twentyFivePercent.classList.add("active");
	} else {
		twentyFivePercent.classList.remove("active");
		tipAmount.innerHTML = dollar.concat("0.00");
		totalAmount.innerHTML = dollar.concat("0.00");
	}

	//The calculation
	if (twentyFivePercent.classList.contains("active")) {
		peopleError.innerHTML = "";
		peopleError.style.margin = "0";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var twentyFivePercentResult = (billInput.value * 0.25) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = twentyFivePercentResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = twentyFivePercentResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}

fiftyPercent.addEventListener("click", fiftyPercentFunction);

function fiftyPercentFunction() {
	//Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	//Toggle on/off tip button
	if (!fiftyPercent.classList.contains("active")) {
		fiftyPercent.classList.add("active");
	} else {
		fiftyPercent.classList.remove("active");
		tipAmount.innerHTML = dollar.concat("0.00");
		totalAmount.innerHTML = dollar.concat("0.00");
	}

	//The calculation
	if (fiftyPercent.classList.contains("active")) {
		peopleError.innerHTML = "";
		peopleError.style.margin = "0";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var fiftyPercentResult = (billInput.value * 0.5) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = fiftyPercentResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = fiftyPercentResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}

customTip.addEventListener("blur", customTipFunction);

function customTipFunction() {
	// Error message
	if (billInput.value == "") {
		preventDefault();
	}

	if (peopleInput.value == "") {
		peopleError.innerHTML = "Can't be zero";
		peopleInput.style.border = "2px solid red";
		peopleInput.style.margin = "0";
		preventDefault();
	}

	// The calculation
	if (!customTip.value == "") {
		peopleError.innerHTML = "";
		peopleInput.style.border = "none";
		peopleInput.style.margin = "0";
		var customTipResult = (billInput.value * (customTip.value / 100)) / peopleInput.value;

		//Tip Amount calculation
		tipAmount.innerHTML = customTipResult;
		tipAmount.innerHTML = Math.floor(tipAmount.innerHTML * 100) / 100;
		tipAmount.innerHTML = dollar.concat(tipAmount.innerHTML);

		//Total Amount calculation
		totalAmount.innerHTML = customTipResult + billInput.value / peopleInput.value;
		totalAmount.innerHTML = Math.round(totalAmount.innerHTML * 100) / 100;
		totalAmount.innerHTML = dollar.concat(totalAmount.innerHTML);
	}
}
