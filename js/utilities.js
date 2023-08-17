
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const InputValueString = inputField.value;
    const inputValue = parseFloat(InputValueString);
    inputField.value = "";
    console.log(InputValueString);
  return inputValue;
}

function getPrevTotalAmount(elementId) {
    const TotalElement = document.getElementById(elementId);
    const PrevTotalString = TotalElement.innerText;
    const PrevTotal = parseFloat(PrevTotalString);
    console.log(PrevTotal);
  return PrevTotal;
}

function setElementValueById(elementId, value) {
  const getElementById = document.getElementById(elementId);
  getElementById.innerText = value;
}