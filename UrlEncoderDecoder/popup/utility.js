/**
 * Function that decode or encode the url
 */
export function decodeOrEncodeUrl(isDecoder, inputText) {
  return isDecoder
    ? decodeURIComponent(inputText)
    : encodeURIComponent(inputText);
}
