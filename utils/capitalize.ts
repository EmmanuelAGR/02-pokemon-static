
/**
 * Converts the first letter of a text to uppercase. [toUpperCaseFirstLetter]
 * @param {string} text Text to convert  
 * @returns string
 */
export const capitalize = (text: string) => text.replace(/^./, text[0].toUpperCase());
