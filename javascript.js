//Basic operations
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function percent(a) {
    return a * 0.01;
}
function plusminus(a) {
    return a * -1;
}

function operate(operation, a, b) {
    if(operation == 'add') return add(a,b);

    if(operation == 'subtract') return subtract(a,b);

    if(operation == 'multiply') return multiply(a,b);

    if(operation == 'divide') return divide(a,b);
}

//Displaying nums
let display = document.querySelector('.display');
let displayValue = 0;
display.textContent = 0;

let decimalButton = document.querySelector('.button.decimal');

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function displayNum(e) {
    if (display.textContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length > 5) {
        display.style.fontSize = '80px';
    }
    if (display.textContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length > 6) {
        display.style.fontSize = '70px';
    }
    if (display.textContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length > 7) {
        display.style.fontSize = '60px';
    }

    if (display.textContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length === 9) {
        displayValue;
    } else if ((display.textContent == 0 && e.target.textContent == '.') || display.textContent == '0.') {
        displayValue += e.target.textContent;
    }  else if (display.textContent == 0 ) {
        displayValue = e.target.textContent;
    } else if (display.textContent.includes('.') && e.target.textContent == '.') {
        displayValue;
    } else {
        displayValue += e.target.textContent;
    }

    display.textContent = numberWithCommas(displayValue);
}

let numberButtons = document.querySelector('.number-buttons').childNodes;
Array.from(numberButtons).forEach(symbol => symbol.addEventListener('click', displayNum));


//clear display
let clearButton = document.querySelector('.button.clear')
function clearDisplay() {
    displayValue = 0;
    display.style.fontSize = '90px';
    display.textContent = displayValue;
}
clearButton.addEventListener('click', clearDisplay);