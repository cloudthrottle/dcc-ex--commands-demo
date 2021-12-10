import {makeCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const makeCommandForm = document.forms.namedItem("makeCommand")

const updateOutput = () => () => {
    const {makeInput: {value}, makeOutput} = makeCommandForm.elements
    makeOutput.value = makeCommand(value)
};

makeCommandForm.addEventListener("change", updateOutput())
makeCommandForm.addEventListener("keyup", updateOutput())