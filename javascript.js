
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
    //edge cases
    if (display.textContent.replace(/[.,]/g,"").length === 9) {
        displayValue;
    } else if ((display.textContent == 0 && e.target.textContent == '.') || display.textContent == '0.') {
        displayValue += e.target.textContent;
    }  else if (display.textContent == 0 ) {
        displayValue = e.target.textContent;
    } else if (display.textContent.includes('.') && e.target.textContent == '.') {
        return;
    } else {
        displayValue += e.target.textContent;
    }

    //adjusting size
    if (display.textContent.replace(/[.,]/g,"").length > 5) {
        display.style.fontSize = '80px';
    }
    if (display.textContent.replace(/[.,]/g,"").length > 6) {
        display.style.fontSize = '70px';
    }
    if (display.textContent.replace(/[.,]/g,"").length > 7) {
        display.style.fontSize = '60px';
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


//Math functions
let storeValue = 0;
let addButton = document.querySelector('.button.add');
let subtractButton = document.querySelector('.button.subtract');
let multiplyButton = document.querySelector('.button.multiply');
let divideButton = document.querySelector('.button.divide');
let equalButton = document.querySelector('.button.equal');

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

function toggleOperator(button) {

    const operations = Array.from(document.getElementsByClassName('operating'));
    console.log(operations);
    operations.forEach(b => {
        if (b.classList.contains('operating')) {
            b.classList.remove('operating');
            b.value = 'OFF';
        }
        return;
    });
    
    if (button.target.value == "OFF") {   
        button.target.value = "ON";
        button.target.classList.add('operating');
    } else { 
        button.target.value = "OFF";
        button.target.classList.remove('operating');
    }

}
addButton.addEventListener('click', this.toggleOperator);
subtractButton.addEventListener('click', this.toggleOperator);
multiplyButton.addEventListener('click', this.toggleOperator);
divideButton.addEventListener('click', this.toggleOperator);

function operate(operation, a, b) {
    if(operation == 'add') return add(a,b);

    if(operation == 'subtract') return subtract(a,b);

    if(operation == 'multiply') return multiply(a,b);

    if(operation == 'divide') return divide(a,b);
}
