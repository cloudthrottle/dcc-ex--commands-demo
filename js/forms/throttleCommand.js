import {throttleCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const throttleCommandForm = document.forms.namedItem("throttleCommand")

const updateOutput = () => () => {
    const {cabInput: {value: cab}, speedInput: {value: speed}, throttleOutput} = throttleCommandForm.elements
    throttleOutput.value = throttleCommand({cab, speed})
};

throttleCommandForm.addEventListener("change", updateOutput())
throttleCommandForm.addEventListener("keyup", updateOutput())
