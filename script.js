const container = document.querySelector(".container");
const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digit");

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
    switch (operator.dataset.value) {
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
    digitBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (display.textContent == 0) display.textContent = button.dataset.value;
            else display.textContent = display.textContent + button.dataset.value;
        })
    });
}

changeDisplayValue()