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