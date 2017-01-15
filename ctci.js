'use strict';

/**
 * 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * @param {String} str - The string to be checked for uniqueness
 * @return {Boolean} true if string has only unique chars. False if a duplicate exists.
 */
function isUnique(str) {
  var charSet = {};

  // Store all single characters into an array.
  for (var i = 0; i < str.length; i++) {
    var val = str.charAt(i);
    if (charSet[val]) {
      return false;
    } else {
      charSet[val] = 1;
    }
  }

  // No duplicates found. The string is unique.
  return true;
}

console.log("\t 1.1 -> Is Unique:", isUnique('abcde'));

/**
 * 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * @param {String} s1 - The first string
 * @param {String} s2 - The second string
 * @return {Boolean} - true if the strings are permutations of one another, false otherwise
 */
function checkPermutation(s1, s2) {

  if (s1.length != s2.length) {
    throw Error("Strings must be of equal lengths to be permutations.");
  }

  function convertToArr(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charAt(i);
    }
    return arr;
  }

  // Convert the strings to arrays
  var arrS1 = convertToArr(s1);
  var arrS2 = convertToArr(s2);

  // Sort the characters in the array
  arrS1.sort(); arrS2.sort();

  // console.log(arrS1, arrS2);

  // Compare every character. They must equal each other!
  for (var k = 0; k < arrS1.length; k++) {
    if (arrS1[k] != arrS2[k]) {
      return false;
    }
  }

  return true;
}

console.log("\t 1.2 -> Check Permutation:", checkPermutation('i am legend', 'im a legend'));

/**
 * 1.3  URLify: Write a method to replace all spaces in a string with '%20:
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 * @param {String} str - The string
 * @param {String} s2 - The 'true' length
 * @return {String} - URLified string
 */
function URLify(str, length) {
  var res = '';
  for (var i in str) {
    if (str.charAt(i) == ' ') {
      // Ignore trailing spaces using the "true" length of the string.
      if (i < length) res += '%20';
    } else {
      // Tack the rest of the chars on as usual
      res += str.charAt(i);
    }
  }

  return res;
}

console.log("\t 1.3 -> URLify:", URLify('Mr John Smith     ', 13));

/**
 * 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * @param {String} str - The string
 * @return {Array} - Permutations
 */
function palindromePermutation(str) {

  // checkPermutation();
  verifyPalindrome(str);

  function verifyPalindrome(string) {
    return string;
  }

  return;
}

console.log("\t 1.4 -> Palindrome Permutation:", palindromePermutation('Tact Coa'));

/**
 * 1.5 One Away: There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 * @param {String} s1 - String 1
 * @param {String} s2 - String 2
 * @return {Boolean}
 */
function oneAway(s1, s2) {

  if (s1.length < s2.length) return checkInsertion(s1, s2);
  if (s1.length > s2.length) return checkInsertion(s2, s1);
  if (s1.length == s2.length) return checkReplacement(s1, s2);

  function checkReplacement(s1, s2) {
    var foundDifferences = 0;
    for (c in s1) {
      if (s1.charAt(c) != s2.charAt(c)) {
        if (foundDifferences > 1) return false;
        foundDifferences++;
      }
    }
    return foundDifferences > 1 ? false : 'Can replace... ' + true;
  }

  function checkInsertion(s1, s2) {
    var index1 = 0, index2 = 0;
    while (index2 < s2.length && index1 < s1.length) {
      if (s1.charAt(index1) != s2.charAt(index2)) {
        if (index1 != index2) return false;
        index2++;
      } else {
        index1++;
        index2++;
      }
    }
    return 'Can insert/remove... ' + true;
  }
}

console.log("\t 1.5 -> One Away:", oneAway('pale', 'pae'));

/**
 * 1.6 String Compression: Implement a method to perform basic string compression using the
 * counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
 * If the "compressed" string would not become smaller than the original string, your method
 * should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 * @param {String} str - uncompressed String ... aabcccccaaa
 * @return {String} - the compressed String ... a2b1c5a3
 */

function stringCompression(str) {
  var result = '';
  var count = 1;

  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);

    if (c == str.charAt(i + 1)) {
      count++;
    } else {
      result += c;
      result += count;
      count = 1;
    }
  }
  return result;
}

console.log("\t 1.6 -> String Compression:", stringCompression('aabcccccaaa'));

// ************************************************************************************
// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix() {

  return;
}

// console.log("\t 1.6 -> String Compression:", stringCompression('aabcccccaaa'));

// ************************************************************************************
// 1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one call to isSubstring
// (e.g.,"waterbottle"is a rotation of"erbottlewat").

function stringRotation() {

  return;
}

// console.log("\t 1.6 -> String Compression:", stringCompresseion('aabcccccaaa'));

// ************************************************************************************
