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
            if (y === 0) {
                isDividingByZero = true;
                return "Cannot divide by zero!";
            }
            return divide(x, y);
    }
}

function calculate() {
    initialiseCalculator();

    digitBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (isDividingByZero) initialiseCalculator();
            isDigitPressed = true;

            if (display.textContent == 0 || isOperatorPressed === true) {
                display.textContent = button.dataset.value;
                isOperatorPressed = false;
            } else display.textContent += button.dataset.value;
        })
    });

    operatorBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (isDividingByZero) initialiseCalculator();
            isOperatorPressed = true;
            if (button.dataset.value === ".") isOperatorDecimal = true;
            else isOperatorDecimal = false;

            if (!isOperatorDecimal) {
                isDigitDecimal = false;

                if (currentValueX === null) {
                    console.log(currentValueX = display.textContent);
                }
                else if (isDigitPressed) {
                    console.log("YEP")
                    console.log(currentValueY = display.textContent);
                    display.textContent = operate(currentOperator, +currentValueX, +currentValueY);
                    currentValueX = display.textContent;
                }

                isDigitPressed = false;
            } else if (!isDigitDecimal) {
                display.textContent += button.dataset.value;
                isDigitDecimal = true;
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
    isOperatorDecimal = false;
    isDigitPressed = false;
    isDigitDecimal = false;
    isDividingByZero = false;
}

calculate();

//Pressing any operator (instead of =) multiple times should not stack.