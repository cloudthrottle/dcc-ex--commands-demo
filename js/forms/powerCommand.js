import {powerCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const powerCommandForm = document.forms.namedItem("powerCommand")

const updateOutput = () => {
    const {
        powerInput: {value: power},
        trackInput: {value: track},
        powerOutput
    } = powerCommandForm.elements
    powerOutput.value = powerCommand({power, track})
};

powerCommandForm.addEventListener("change", updateOutput)
powerCommandForm.addEventListener("keyup", updateOutput)
updateOutput()
