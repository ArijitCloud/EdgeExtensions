import {
  getFromStorage,
  saveInStorage,
  removeFromStorage,
} from "./useStorage.js";
import { decodeOrEncodeUrl } from "./utility.js";

/**
 * Text content for UI elements and constants
 */
const textContent = {
  switchEncoder: "Switch to encoder",
  switchDecoder: "Switch to decoder",
  encoderTool: "Url Encoder",
  decoderTool: "Url Decoder",
};
const storageKey = "decoderOrEncoder";

/**
 * Read DOM elements
 */
const inputAreaId = document.getElementById("input-area");
const outputAreaId = document.getElementById("output-area");
const buttonSwitch = document.getElementById("switch");
const toolName = document.getElementById("utility-name");
const checkboxUseStorage = document.getElementById("use-storage");

/**
 * Once all required DOM elements are available perform desired operation
 */
if (inputAreaId && outputAreaId && buttonSwitch) {
  const storedValue = getFromStorage(storageKey);

  if (storedValue?.value) {
    inputAreaId.innerText = storedValue.value;
    outputAreaId.value = decodeOrEncodeUrl(
      buttonSwitch.innerText === textContent.switchEncoder,
      inputAreaId.value
    );
  }
  checkboxUseStorage.checked = !!storedValue?.isChecked;

  /**
   * Decode or encode on input or change of text in input area
   */
  inputAreaId.oninput = function () {
    try {
      outputAreaId.value = decodeOrEncodeUrl(
        buttonSwitch.innerText === textContent.switchEncoder,
        inputAreaId.value
      );
      inputAreaId.style.borderColor = "green";
      checkboxUseStorage.checked &&
        saveInStorage(storageKey, {
          value: inputAreaId.value,
          isChecked: checkboxUseStorage.checked,
        });
    } catch (error) {
      inputAreaId.style.borderColor = "red";
    }
  };

  /**
   * save or remove from local storage on checkbox change
   */
  checkboxUseStorage.addEventListener('change', (event) => {
    if (event.target.checked && inputAreaId.value) {
      saveInStorage(storageKey, {
        value: inputAreaId.value,
        isChecked: checkboxUseStorage.checked,
      });
    } else {
      removeFromStorage(storageKey);
    }
  });

    /**
     * Decoder to Encoder to Decoder switch button click handler
     */
    buttonSwitch.onclick = function () {
      const wasPreviousStateDecoder= buttonSwitch.innerText === textContent.switchEncoder;
      if (buttonSwitch.innerText === textContent.switchEncoder) {
        buttonSwitch.innerText = textContent.switchDecoder;
        toolName.innerText = textContent.encoderTool;
      } else {
        buttonSwitch.innerText = textContent.switchEncoder;
        toolName.innerText = textContent.decoderTool;
      }

      //recompute output area value on switch
      if (inputAreaId.value) {
        outputAreaId.value =wasPreviousStateDecoder?inputAreaId.value: decodeOrEncodeUrl(
          buttonSwitch.innerText === textContent.switchEncoder,
          inputAreaId.value
        );
      }
    };
  };
