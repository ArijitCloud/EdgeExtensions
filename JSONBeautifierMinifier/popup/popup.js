import {
  getFromStorage,
  saveInStorage,
  removeFromStorage,
} from "./useStorage.js";
import { formatJSON } from "./utility.js";

/**
 * Text content for UI elements and constants
 */
const textContent = {
  switchMinifier: "Switch to minifier",
  switchBeautifier: "Switch to beautifier",
  beautifierTool: "JSON Beautifier",
  minifierTool: "JSON Minifier",
};
const storageKey = "jsonConverterInput";

/**
 * Read DOM elements
 */
const inputAreaId = document.getElementById("input-area");
const outputAreaId = document.getElementById("output-area");
const buttonSwitch = document.getElementById("switch");
const toolName = document.getElementById("utility-name");
const buttonDelete = document.getElementById("deleteStorage");

/**
 * Once all required DOM elements are available perform desired operation
 */
if (inputAreaId && outputAreaId && buttonSwitch) {
  const storedValue = getFromStorage(storageKey);

  if (storedValue) {
    inputAreaId.innerText = storedValue;
    outputAreaId.value = formatJSON(
      buttonSwitch.innerText === textContent.switchMinifier,
      inputAreaId.value
    );
  }

  /**
   * Prettify or minify on input or change of text in input area
   */
  inputAreaId.oninput = function () {
    try {
      outputAreaId.value = formatJSON(
        buttonSwitch.innerText === textContent.switchMinifier,
        inputAreaId.value
      );
      inputAreaId.style.borderColor = "green";
      saveInStorage(storageKey, inputAreaId.value);
    } catch (error) {
      inputAreaId.style.borderColor = "red";
    }
  };

  /**
   * Beautifier to Minifier to Beautifier switch button click handler
   */
  buttonSwitch.onclick = function () {
    if (buttonSwitch.innerText === textContent.switchMinifier) {
      buttonSwitch.innerText = textContent.switchBeautifier;
      toolName.innerText = textContent.beautifierTool;
    } else {
      buttonSwitch.innerText = textContent.switchMinifier;
      toolName.innerText = textContent.minifierTool;
    }

    //recompute output area value
    if (inputAreaId.value) {
      outputAreaId.value = formatJSON(
        buttonSwitch.innerText === textContent.switchMinifier,
        inputAreaId.value
      );
    }
  };

  /**
   * clear local storage data for the plugin, lets user delete their own data from local storage
   */
  buttonDelete.onclick = function () {
    removeFromStorage(storageKey);
    inputAreaId.value = "";
    outputAreaId.value = "";
  };
}
