
//Displaying nums
let display = document.querySelector('.display');
let displayValue = 0;
display.textContent = 0;
let stored = false;

let decimalButton = document.querySelector('.button.decimal');


function adjustSize() {
    display.style.fontSize = '90px';
    //adjusting size
    if (String(displayValue).length > 5) {
        display.style.fontSize = '80px';
    }
    if (String(displayValue).length > 6) {
        display.style.fontSize = '70px';
    }
    if (String(displayValue).length > 7) {
        display.style.fontSize = '60px';
    }
    

}

function numberWithCommas(x) {
    //scientific notation
    if (x.toString().length > 9) {
        display.style.fontSize = '60px';
        return Number.parseFloat(+displayValue).toExponential(5);

    } else {
        
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
    
    }
    
}

function displayNum(e) {
    //second number
    if (document.querySelector('.waiting')) {
        document.querySelector('.waiting').classList.remove('waiting');
    }


    if (stored == true) {
        
        displayValue = e.target.textContent;
        stored = false;
        
    } else {

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

    
    }

    adjustSize();
    display.textContent = numberWithCommas(displayValue);
    
    if (display.textContent == '0') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'C';
    }
    
}


let numberButtons = document.querySelector('.number-buttons').childNodes;
Array.from(numberButtons).forEach(symbol => symbol.addEventListener('click', displayNum));



//clear display
let clearButton = document.querySelector('.button.clear');
if (display.textContent == '0') {
    clearButton.textContent = 'AC';
}
function clearDisplay() {
    if (clearButton.textContent == 'AC') {
        adjustSize();
        displayValue = 0;
        storeValue = 0;
        const operations = Array.from(document.getElementsByClassName('operating'));
        operations.forEach(b => {
            if (b.classList.contains('operating' || 'waiting')) {
                b.classList.remove('operating', 'waiting');
                b.value = 'OFF';
            }
            return;
        });
        stored = false;
        display.style.fontSize = '90px';
        if (display.textContent == '0') {
            clearButton.textContent = 'AC';
        } else {
            clearButton.textContent = 'C';
        }
        display.textContent = displayValue;
    } else {
    adjustSize();
    displayValue = 0;
    clearButton.textContent = 'AC';
    display.style.fontSize = '90px';
    display.textContent = displayValue;
    }
}
clearButton.addEventListener('click', clearDisplay);


//Math functions
let storeValue = 0;
let addButton = document.querySelector('.button.add');
let subtractButton = document.querySelector('.button.subtract');
let multiplyButton = document.querySelector('.button.multiply');
let divideButton = document.querySelector('.button.divide');
let equalButton = document.querySelector('.button.equal');
let lastoperation;
let operation;

//Basic operations
function add(a,b) {
    return +a + +b;
}
function subtract(a,b) {
    return +a - +b;
}
function multiply(a,b) {
    return +a * +b;
}
function divide(a,b) {
    return +a / +b;
}


function toggleOperator(button) {
    let waiters = document.getElementsByClassName('waiting');
    
    operation = button.target.classList[1];
    
    if(waiters.length == 0) {

    if(lastoperation == 'add') displayValue = (add(storeValue, displayValue));

    if(lastoperation == 'subtract') displayValue = (subtract(storeValue, displayValue));

    if(lastoperation == 'multiply') displayValue = (multiply(storeValue, displayValue));

    if(lastoperation == 'divide') displayValue = (divide(storeValue, displayValue));

    }

    storeValue = displayValue;
    

    
    adjustSize();
    display.textContent = numberWithCommas(displayValue);
    
    if (display.textContent == '0') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'C';
    }
    
    
    const operations = Array.from(document.getElementsByClassName('operating'));
    operations.forEach(b => {
        if (b.classList.contains('operating' || 'waiting')) {
            b.classList.remove('operating', 'waiting');
            b.value = 'OFF';
        }
        return;
    });
    
    if (button.target.value == "OFF") {   
        button.target.value = "ON";
        stored = true;
        button.target.classList.add('operating', 'waiting');
        lastoperation = button.target.classList[1];
    } else { 
        button.target.value = "OFF";
        button.target.classList.remove('operating', 'waiting');
    };

    

}

addButton.addEventListener('click', this.toggleOperator);
subtractButton.addEventListener('click', this.toggleOperator);
multiplyButton.addEventListener('click', this.toggleOperator);
divideButton.addEventListener('click', this.toggleOperator);


function operate() {
    operation = document.querySelector('.operating').classList[1];

    if(operation == 'add') displayValue = (add(storeValue, displayValue));

    if(operation == 'subtract') displayValue = (subtract(storeValue, displayValue));

    if(operation == 'multiply') displayValue = (multiply(storeValue, displayValue));

    if(operation == 'divide') displayValue = (divide(storeValue, displayValue));

    const operations = Array.from(document.getElementsByClassName('operating'));
        operations.forEach(b => {
            if (b.classList.contains('operating')) {
                b.classList.remove('operating');
                b.value = 'OFF';
            }
            return;
    });

    adjustSize();
    display.textContent = numberWithCommas(displayValue);
    
    if (display.textContent == '0') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'C';
    }

    stored = true;
    storeValue = 0;
    operation = '';
    lastoperation = '';
    
}

//utility operations
let plusminusButton = document.querySelector('.plus-minus');
let percentButton = document.querySelector('.percent');

function plusminus(a) {
    displayValue = -a;
    
}

function percent(a) {
    displayValue = a * 0.01;
}


plusminusButton.addEventListener('click', () => {
    plusminus(displayValue);
    
    display.textContent = numberWithCommas(displayValue);
    
    if (display.textContent == '0') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'C';
    }
});

percentButton.addEventListener('click', () => {
    percent(displayValue);
    
    display.textContent = numberWithCommas(displayValue);

    if (display.textContent == '0') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'C';
    }
});

equalButton.addEventListener('click', operate);