//Read DOM elements
const inputAreaId = document.getElementById("input-area");
const outputAreaId = document.getElementById("output-area");
const buttonSwitch = document.getElementById("switch");
const toolName = document.getElementById("utility-name");

//Once all required DOM elements are available perform desired operation
if (inputAreaId && outputAreaId && buttonSwitch) {
  //Prettify or minify on input of text in input area
  inputAreaId.oninput = function () {
    try {
      outputAreaId.value =
        buttonSwitch.innerText === textContent.switchMinifier
          ? prettifyJSON(inputAreaId.value)
          : minifyJSON(inputAreaId.value);
      inputAreaId.style.borderColor = "green";
    } catch (error) {
      inputAreaId.style.borderColor = "red";
    }
  };

  //Beautifier to Minifier to Beautifier switch button click handler
  buttonSwitch.onclick = function () {
    if (buttonSwitch.innerText === textContent.switchMinifier) {
      buttonSwitch.innerText = textContent.switchBeautifier;
      toolName.innerText = textContent.beautifierTool;
    } else {
      buttonSwitch.innerText = textContent.switchMinifier;
      toolName.innerText = textContent.minifierTool;
    }
    outputAreaId.value = "";
    inputAreaId.value = "";
  };
}

// Function that beautify the json with 2 spaces for tabs need this value to be "\t"
function prettifyJSON(inputText, format = 2) {
  return JSON.stringify(JSON.parse(inputText), null, format);
}

// Function that minify the json input
function minifyJSON(inputText) {
  return JSON.stringify(JSON.parse(inputText));
}

//UI labels
const textContent = {
  switchMinifier: "Switch to minifier",
  switchBeautifier: "Switch to beautifier",
  beautifierTool: "JSON Beautifier",
  minifierTool: "JSON Minifier",
};
