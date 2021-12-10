import {emergencyStopCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const emergencyStopCommandForm = document.forms.namedItem("emergencyStopCommand")

const updateOutput = () => {
  const {emergencyStopOutput} = emergencyStopCommandForm.elements
  emergencyStopOutput.value = emergencyStopCommand()
};

updateOutput()
