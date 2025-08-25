// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const st1 = array1.join("");
  const st2 = array2.join("");
  return Number(st1) + Number(st2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);
  const revStr = str.split('').reverse().join('');
  return str === revStr;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return 'Required field';
  }
  const num = Number(input);
  if(isNaN(num) || num === 0){
    return 'Must be a number besides 0';
  }
  return ''
}
