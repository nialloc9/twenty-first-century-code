/**
 * turns px into rem
 * @param pixels
 * @returns {string}
 */
export const remCalc = pixels => {
    return `${(pixels / 14).toFixed(4)}rem`;
};

/**
 * turns px into em
 * @param pixels
 * @returns {string}
 */
export const emCalc = pixels => {
    return `${(pixels / 14).toFixed(4)}em`;
};

/**
 * creates a timestamp in seconds
 * @param timestamp
 */
export const createTimestamp = (timestamp) => timestamp ? Math.round(new Date(timestamp).getTime()/1000) : Math.round(new Date().getTime()/1000);

/**
 * capitalizes the first character in a string
 * @param string
 */
export const capitalizeFirstChar = string => string.charAt(0).toUpperCase() + string.substring(1);

/**
 * gets a substring of a string using start and end and optional max length
 * @param string
 * @param max
 * @param start
 * @param end
 * @returns {string}
 */
export const trimString = ({ string, max, start, end }) => {

    if(!max){
        return string.substring(start, end)
    }

    return string.length > max ? `${string.substring(start, end)}...` : string
};

/**
 * @description creates a random string of numbers and characters
 * @param {number} length
 * @returns {string}
 */
export const generateId = (length = 10) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   
    for ( let index = 0; index < length; index++ ) {
       result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
 }

 /**
  * @description capitalizes the first letter of each word in a string
  * @param {string} sentence
  * @returns {string}
  */
export const capitalizeEachWord = sentence => sentence.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')