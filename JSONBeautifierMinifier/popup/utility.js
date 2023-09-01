/**
 * format json input by either beautifying or minifying it
 */
export function formatJSON(isBeautifier, inputText) {
  return isBeautifier ? prettifyJSON(inputText) : minifyJSON(inputText);
}

/**
 * Function that beautify the json with 2 spaces for tabs need this value to be "\t"
 */
export function prettifyJSON(inputText, format = 2) {
  return JSON.stringify(JSON.parse(inputText), null, format);
}

/**
 * Function that minify the json input
 */
export function minifyJSON(inputText) {
  return JSON.stringify(JSON.parse(inputText));
}
