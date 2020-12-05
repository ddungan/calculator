let heldValue = null;

let heldOperation = null;

let nextValue = null;

function showValue(location, value) {
    if (value === null) {
        $(location).text('')
    } else {
        $(location).text(Number(value))
    }
}

function updateDisplay() {
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue);
}

function onDigitClick() {
    let digit = $((this), '.digits button').text();

    if (nextValue === null) {
        nextValue = '0' + digit;
    } else {
        nextValue = nextValue + digit;
    }

    if (heldValue !== null && heldOperation == null) {
        heldValue = null;
      }
    
    console.log(nextValue);
    
    updateDisplay();
}

$('.digits button').click(onDigitClick);

function onClearClick() {
    heldValue = null;
    heldOperation = null;
    nextValue = null;
    
    updateDisplay();

    $('.next-operation').text('');
}

$('.clear-all').click(onClearClick);

function onClearEntryClick() {
    nextValue = null;
    
    updateDisplay();
}

$('.clear-entry').click(onClearEntryClick);

function add(x, y) {
    z = Number(x) + Number(y);
    return z;
}

function subtract(x, y) {
    z =  Number(x) - Number(y);
    return z;
}

function multiply(x, y) {
    z = Number(x) * Number(y);
    return z;
}

function divide(x, y) {
    z = Number(x) / Number(y);
    return z;
}

function power(x, y) {
    z = Number(x) ** Number(y);
    return z;
}

function setHeldOperation(operation) {
    
    if (heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue);
    } else if (nextValue !== null) {
        heldValue = nextValue;
    }
    nextValue = null;
    heldOperation = operation;
}

function onAddClick() {
    setHeldOperation(add)
    $('.next-operation').text($((this), '.add').text());
    updateDisplay();
}

$('.add').click(onAddClick);

function onSubtractClick() {
    setHeldOperation(subtract);
    $('.next-operation').text($((this), '.subtract').text());
    updateDisplay();
}

$('.subtract').click(onSubtractClick);

function onMultiplyClick() {
    setHeldOperation(multiply);
    $('.next-operation').text($((this), '.multiply').text());
    updateDisplay();
}

$('.multiply').click(onMultiplyClick);

function onDivideClick() {
    setHeldOperation(divide);
    $('.next-operation').text($((this), '.divide').text());
    updateDisplay();
}

$('.divide').click(onDivideClick);

function onEqualsClick() {
    setHeldOperation(null);
    $('.next-operation').text('');
    updateDisplay();
}

$('.equals').click(onEqualsClick);

let memoryValue = null;

function onStoreMemClick() {
    if (nextValue !== null) {
    memoryValue = nextValue;
    $('#mem').css('background-color', 'orange');
    }
}

$('#store-mem').click(onStoreMemClick);

function onClearMemClick() {
    memoryValue = null;
    $('#mem').css('background-color', 'rgb(40, 40, 40)');
}

$('#clear-mem').click(onClearMemClick);

function onPiClick() {
    nextValue = Math.PI;
    updateDisplay();
}

$('#pi').click(onPiClick);

function onMemClick() {
    if (memoryValue !== null) {
    nextValue = memoryValue;
    }
    updateDisplay();
}

$('#mem').click(onMemClick);

function onSqClick() {
    heldValue = nextValue * nextValue;
    nextValue = null;
    updateDisplay();
}

$('#sq').click(onSqClick);

function onCuClick() {
    heldValue = nextValue ** 3;
    nextValue = null;
    updateDisplay();
}

$('#cu').click(onCuClick);

function onSqRootClick() {
    heldValue = Math.sqrt(nextValue);
    nextValue = null;
    updateDisplay();
}

$('#sq-root').click(onSqRootClick);

function onCuRootClick() {
    heldValue = Math.cbrt(nextValue);
    nextValue = null;
    updateDisplay();
}

$('#cu-root').click(onCuRootClick);

function onCentClick() {
    heldValue = nextValue * .01;
    nextValue = null;
    updateDisplay();
}

$('#cent').click(onCentClick);

function onXYClick() {
    setHeldOperation(power);
    $('.next-operation').text('**');
    updateDisplay();
}

$('#xy').click(onXYClick);