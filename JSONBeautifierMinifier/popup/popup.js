const inputAreaId = document.getElementById("input-area");
const outputAreaId = document.getElementById("output-area");
const buttonSwitch = document.getElementById("switch");
const toolName = document.getElementById("utility-name");
if (inputAreaId && outputAreaId && buttonSwitch) {
  inputAreaId.oninput = function () {
    outputAreaId.value =
      buttonSwitch.innerText === textContent.switchMinifier
        ? prettifyJSON(inputAreaId.value)
        : minifyJSON(inputAreaId.value);
  };

  buttonSwitch.onclick = function () {
    if (buttonSwitch.innerText === textContent.switchMinifier) {
      buttonSwitch.innerText = textContent.switchBeautifier;
      toolName.innerText = textContent.beautifierTool;     
    } else {
      buttonSwitch.innerText = textContent.switchMinifier;
      toolName.innerText = textContent.minifierTool;
    }
    outputAreaId.value = "" ;
    inputAreaId.value = "" ;
  };
}

function prettifyJSON(inputText) {
  return JSON.stringify(JSON.parse(inputText), null, 2); //JSON.stringify(obj, null, "\t\t");
}

function minifyJSON(inputText) {
  return JSON.stringify(JSON.parse(inputText));
}

const textContent = {
  switchMinifier: "Switch to minifier",
  switchBeautifier: "Switch to beautifier",
  beautifierTool: "JSON Beautifier",
  minifierTool: "JSON Minifier",
};
