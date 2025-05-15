const calculatorDisplay = document.getElementById("calculatorDisplay");
const fuckYourWorkButton = document.getElementById("fuckYourWorkButton");
const theRealAssignment = document.getElementById("operationButtons");
let fuckYourWorkButtonCount = 0;

function typeIn(x) {
    if (calculatorDisplay.value == "0" && x != ".") {
        calculatorDisplay.value = x;
        console.log(`User just typed in ${x}`);
    } else {
        calculatorDisplay.value = calculatorDisplay.value+x;
        console.log(`User just typed in ${x}`);
    }
}

function clearDisplay() {
    calculatorDisplay.value = "0";
}

function calculate() {
    calculatorDisplay.value = eval(calculatorDisplay.value);
}

function backspace() {
    if (calculatorDisplay.value.length <= 1) {
        calculatorDisplay.value = "0";
    } else {
        calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
    }
}

console.log("Webpage warm and ready!");
