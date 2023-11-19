const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult,
  operationNumber, newResult) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
function calculculateResult(calculationType) {

  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }
  
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === 'SUBTRACT') {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calculationType === 'MULTIPLY') {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function addNumbers() {
  calculculateResult('ADD');
}

function subtractNumbers() {
  calculculateResult('SUBTRACT');
}

function multiplyNumbers() {
  calculculateResult('MULTIPLY');
}

function divideNumbers() {
  calculculateResult('DIVIDE');
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);