import {throttleCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const throttleCommandForm = document.forms.namedItem("throttleCommand")

const updateOutput = () => {
    const {
        cabInput: {value: cab},
        speedInput: {value: speed},
        directionInput: {value: direction},
        throttleOutput,
        speedOutput
    } = throttleCommandForm.elements
    speedOutput.value = speed
    throttleOutput.value = throttleCommand({cab, speed, direction})
};

throttleCommandForm.addEventListener("change", updateOutput)
throttleCommandForm.addEventListener("keyup", updateOutput)
updateOutput()
