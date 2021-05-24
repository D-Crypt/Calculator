const container = document.querySelector(".container");
const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digit");
const acBtn = document.querySelector(".clear");
const operatorBtns = document.querySelectorAll(".operator");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            if (x === 0) return null;
            return divide(x, y);
    }
}

function calculate() {
    initialiseCalculator();

    digitBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (display.textContent == 0 || isOperatorPressed === true) {
                display.textContent = button.dataset.value;
                isOperatorPressed = false;
            } else display.textContent += button.dataset.value;
        })
    });

    operatorBtns.forEach(button => {
        button.addEventListener("click", () => {
            isOperatorPressed = true;

            if (currentValueX === null) currentValueX = display.textContent;
            else {
                currentValueY = display.textContent;
                display.textContent = operate(currentOperator, +currentValueX, +currentValueY);
                currentValueX = display.textContent;
            }

            currentOperator = button.dataset.value;
        })
    })

    acBtn.addEventListener("click", () => {
        initialiseCalculator();
    })
}

function initialiseCalculator() {
    display.textContent = 0;
    currentValueX = null;
    currentValueY = null;
    currentOperator = null;
    isOperatorPressed = false;
}

calculate();

console.log(operate("+", 1111, 111))

/*

Need to assess the previous expression (firstOperator and currentValueY) when pressing equals.
Pressing any operator (instead of =) multiple times should not stack.

*/