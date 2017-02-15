/**
 * Valid Palindrome - O(n) time / O(n) space
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * @param {String} str - string to validate
 * @return {Bool}
 */
function validPalindrome(str) {
  if (!str || 0 === str.length) return true;

  var original = str.toLowerCase().replace(/[\W_]+/g, '');
  var reverse = original.split('').reverse().join('');

  if (original === reverse) {
    console.log("\t -> validPalindrome:", true);
    return true;
  } else {
    console.log("\t -> validPalindrome:", false);
    return false;
  }
}

var str = "A man, a plan, a canal: Panama";
var str = "race a car";
validPalindrome(str);
