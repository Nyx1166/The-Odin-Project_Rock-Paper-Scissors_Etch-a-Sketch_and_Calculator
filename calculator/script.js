const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }

    return a / b;
}

function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);

    if (operator === "+") {
        return add(a, b);
    }

    if (operator === "−") {
        return subtract(a, b);
    }

    if (operator === "×") {
        return multiply(a, b);
    }

    if (operator === "÷") {
        return divide(a, b);
    }
}

document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener("click", function() {

        if (operator === "") {
            firstNumber += button.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.textContent = secondNumber;
        }

    });
});

document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener("click", function() {

        if (firstNumber !== "" && secondNumber !== "") {
            firstNumber = operate(firstNumber, operator, secondNumber);
            secondNumber = "";
            display.textContent = firstNumber;
        }

        operator = button.textContent;

    });
});

document.getElementById("equals").addEventListener("click", function() {

    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {

        let result = operate(firstNumber, operator, secondNumber);

        display.textContent = result;

        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
    }

});

document.getElementById("clear").addEventListener("click", function() {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    display.textContent = "0";

});

document.getElementById("erase").addEventListener("click", function() {

    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);

        if (firstNumber === "") {
            display.textContent = "0";
        } else {
            display.textContent = firstNumber;
        }

    } else {
        secondNumber = secondNumber.slice(0, -1);

        if (secondNumber === "") {
            display.textContent = "0";
        } else {
            display.textContent = secondNumber;
        }
    }

});

document.getElementById("decimal").addEventListener("click", function() {

    if (operator === "") {

        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            display.textContent = firstNumber;
        }

    } else {

        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            display.textContent = secondNumber;
        }

    }

});