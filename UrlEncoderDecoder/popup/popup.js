const inputAreaId = document.getElementById("input-area");
const outputAreaId = document.getElementById("output-area");
const buttonSwitch = document.getElementById("switch");
const toolName = document.getElementById("utility-name");
if (inputAreaId && outputAreaId) {
  inputAreaId.oninput = function () {
    outputAreaId.value =
      buttonSwitch.innerText === textContent.switchEncoder
        ? decodeURIComponent(inputAreaId.value)
        : encodeURIComponent(inputAreaId.value);
  };
}

if (buttonSwitch) {
  buttonSwitch.onclick = function () {
    if (buttonSwitch.innerText === textContent.switchEncoder) {
      buttonSwitch.innerText = textContent.switchDecoder;
      toolName.innerText = textContent.encoderTool;
    } else {
      buttonSwitch.innerText = textContent.switchEncoder;
      toolName.innerText = textContent.decoderTool;
    }
  };
}

const textContent = {
  switchEncoder: "Switch to encoder",
  switchDecoder: "Switch to decoder",
  encoderTool: "Url Encoder",
  decoderTool: "Url Decoder",
};
