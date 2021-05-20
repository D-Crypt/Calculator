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
            else return divide(x, y);
    }
}

function changeDisplayValue() {
    let currentValueX = 0;
    let currentValueY;
    let operatorPressed = false;
    let firstOperator;
    let currentOperator;

    digitBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (display.textContent == 0 || operatorPressed === true) { 
                display.textContent = button.dataset.value;
                operatorPressed = false;
            } else display.textContent = display.textContent + button.dataset.value;
        })
    });

    operatorBtns.forEach(button => {
        button.addEventListener("click", () => {
            currentOperator = button.dataset.value;

            if (operatorPressed === false) {
                currentValueX = display.textContent;
                operatorPressed = true;
                firstOperator = currentOperator;

                console.log("X = " + currentValueX);
            } else {
                currentValueY = display.textContent;
                display.textContent = operate(firstOperator, +currentValueX, +currentValueY);

                console.log("Y = " + currentValueY);
            }
        })
    })

    acBtn.addEventListener("click", () => {
        currentValueX = 0;
        currentValueY = 0;
        display.textContent = currentValueX;
    })
}

changeDisplayValue()

/* 

Type numbers. 
As soon as you press any operator, remember whatever is on the display (currentValueX).
Now that you've pressed an operator, type out the other digits.
As soon as you press any other operator for a second time, remember the display again (currentValueY)
Perform the operate using the first operator, currentValueX and currentValueY

*/ 