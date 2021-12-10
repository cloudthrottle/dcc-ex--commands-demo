import {cabCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const functionButtonsForm = document.forms.namedItem("function-buttons")
const functionButtonTemplate = document.getElementById("function-button-template")
const {cabCommandOutput} = functionButtonsForm.elements

// Function buttons 0 - 68
const functionData = Array.from({length: 69}, (_, i) => {
  return {
    func: i,
    value: 0
  };
})

function togglePressedValue(event) {
  const {target} = event;
  const {pressed: previousPressedState} = target.dataset
  const newPressedState = previousPressedState !== "true"
  target.dataset.pressed = newPressedState
  target.blur()
  return {target, newPressedState};
}

function displayCommandOutput(target, newPressedState) {
  const {value: func} = target
  const cab = 12
  const value = newPressedState ? 1 : 0
  cabCommandOutput.value = cabCommand({cab, func, value})
}

const functionButtonClickHandler = (event) => {
  event.preventDefault()
  const {target, newPressedState} = togglePressedValue(event);
  displayCommandOutput(target, newPressedState);
}

functionData.forEach(data => {
  const buttonTemplate = functionButtonTemplate.content.cloneNode(true)
  const buttonElement = buttonTemplate.querySelector("button");
  buttonElement.innerHTML = `F${data.func}`
  buttonElement.value = data.func
  buttonElement.addEventListener("click", functionButtonClickHandler)
  functionButtonsForm.appendChild(buttonTemplate)
})

