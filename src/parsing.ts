/**
 * Parses a JSON array from a given text. The function looks for a JSON block wrapped in triple backticks
 * with `json` language identifier, and if not found, it searches for an array pattern within the text.
 * It then attempts to parse the JSON string into a JavaScript object. If parsing is successful and the result
 * is an array, it returns the array; otherwise, it returns null.
 *
 * @param text - The input text from which to extract and parse the JSON array.
 * @returns An array parsed from the JSON string if successful; otherwise, null.
 */
export function parseJsonArrayFromText(text: string) {
  let jsonData = null;

  const jsonBlockPattern = /```json\n([\s\S]*?)\n```/;
  const jsonBlockMatch = text.match(jsonBlockPattern);

  if (jsonBlockMatch) {
    try {
      jsonData = JSON.parse(jsonBlockMatch[1]);
    } catch (e) {
      return null;
    }
  } else {
    const arrayPattern = /\[\s*{[\s\S]*?}\s*\]/;
    const arrayMatch = text.match(arrayPattern);

    if (arrayMatch) {
      try {
        jsonData = JSON.parse(arrayMatch[0]);
      } catch (e) {
        return null;
      }
    }
  }

  if (Array.isArray(jsonData)) {
    return jsonData;
  } else {
    return null;
  }
}

/**
 * Parses a JSON object from a given text. The function looks for a JSON block wrapped in triple backticks
 * with `json` language identifier, and if not found, it searches for an object pattern within the text.
 * It then attempts to parse the JSON string into a JavaScript object. If parsing is successful and the result
 * is an object (but not an array), it returns the object; otherwise, it tries to parse an array if the result
 * is an array, or returns null if parsing is unsuccessful or the result is neither an object nor an array.
 *
 * @param text - The input text from which to extract and parse the JSON object.
 * @returns An object parsed from the JSON string if successful; otherwise, null or the result of parsing an array.
 */
export function parseJSONObjectFromText(text: string) {
  let jsonData = null;

  const jsonBlockPattern = /```json\n([\s\S]*?)\n```/;
  const jsonBlockMatch = text.match(jsonBlockPattern);

  if (jsonBlockMatch) {
    try {
      jsonData = JSON.parse(jsonBlockMatch[1]);
    } catch (e) {
      return null;
    }
  } else {
    const objectPattern = /{[\s\S]*?}/;
    const objectMatch = text.match(objectPattern);

    if (objectMatch) {
      try {
        jsonData = JSON.parse(objectMatch[0]);
      } catch (e) {
        return null;
      }
    }
  }

  if (
    typeof jsonData === "object" &&
    jsonData !== null &&
    !Array.isArray(jsonData)
  ) {
    return jsonData;
  } else if (typeof jsonData === "object" && Array.isArray(jsonData)) {
    return parseJsonArrayFromText(text);
  } else {
    return null;
  }
}
