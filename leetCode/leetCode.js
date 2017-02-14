'use strict';

/**
 * Swaps two values in an array.
 * @param {Array} arr - array containing the items.
 * @param {int} x - index of first item to swap.
 * @param {int} y - index of second item to swap.
 * @return {void}
 */
function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

/**
 * Reverses an array.
 * @param {Array} arr - array to reverse.
 * @param {int} i - index to begin range.
 * @param {int} j - index to end range.
 * @return {void}
 */
function reverse(arr, i, j) {
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

var A = [3, 2, 2, 3];
var val = 2;
removeElement(A, val);

/**
 * Character Frequency - O(n) time / O(n) space
 * Use a hash table to count the frequency of each character in a given string.
 * @param {String} str - String to process
 * @return {Array} - array of all chars and their frequencies
 */
function characterFrequency(str) {
  var freq = {};

  for (var i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }

  console.log("\t -> characterFrequency:", freq);
  return freq;
}

var str = "Hello⚽world";
characterFrequency(str);

/**
 * Length of Longest Substring Without Repeating Characters - O(n) time / O(setSize) space
 * Given a string, find the length of the longest substring without repeating characters.
 * @param {String} s - String to process
 * @return {Int} - length of longest substring
 */
function lengthOfLongestSubstring(s) {
  if (s === '') return 0;
  if (s.length < 2) return 1;

  var i = 0, j = 0, max = 0;
  var set = {};

  while (j < s.length) {
    if (!set[s[j]]) {
      set[s[j]] = 1;
      j++;
      max = Math.max(max, Object.keys(set).length);
    } else {
      delete set[s[i]];
      i++;
    }

    // console.log('i:', i, '| j:', j, '| set:', set, '| max:', max);
  }

  console.log("\t -> lengthOfLongestSubstring:", max);
  return max;
}

var str = "abcabcbb"; // abc
var str = "bbbbb"; // b
var str = "pwwkew"; // wke
lengthOfLongestSubstring(str);

/**
 * String to Integer (atoi) - O(n) time / O(1) space
 * Implement atoi to convert a string to an integer.
 * @param {String} s - main string to convert
 * @return {Int} - the string converted to an integer
 */
function atoi(s) {
  var sign = 1;
  var int = 0;
  var baseCharCode = '0'.charCodeAt(0);
  var INT_MAX = Math.pow(2, 31) - 1;
  var INT_MIN = Math.pow(-2, 31);

  s = s.trim();
  if (s[0] === '-' || s[0] === '+') {
    sign = s[0] === '-' ? -1 : 1;
    s = s.substring(1);
  }

  for (var c in s) {
    var digit = s.charCodeAt(c) - baseCharCode;
    if (0 <= digit && digit <= 9) {
      int *= 10;
      int += digit;
    } else {
      break;
    }
  }

  int = sign * int;

  if (int > INT_MAX) int = INT_MAX;
  if (int < INT_MIN) int = INT_MIN;

  console.log("\t -> atoi:", int);
  return int;
}

var str = '299';
atoi(str);

/**
 * Reverse Integer - O(n) time / O(1) space
 * Given an integer, reverse it while preserving the sign.
 * @param {Int} x - integer to reverse
 * @return {Int} - final int reversed with preserved sign
 */
function reverseInteger(x) {
  var sign = 1;
  var int = 0;
  var baseCharCode = '0'.charCodeAt(0);
  var INT_MAX = Math.pow(2, 31) - 1;
  var INT_MIN = Math.pow(-2, 31);

  x = x.toString();
  if (x[0] === '-' || x[0] === '+') {
    sign = x[0] === '-' ? -1 : 1;
    x = x.substring(1);
  }

  x = x.split('').reverse().join('');
  x = parseInt(x);
  x *= sign;

  if (x > INT_MAX) x = 0;
  if (x < INT_MIN) x = 0;

  console.log("\t -> reverseInteger:", x);
  return x;
}

var x = -123;
reverseInteger(x);

/**
 * Array Equilibrium - O(n) time / O(1) space
 * Given a zero-indexed array A consisting of N integers, returns any of its equilibrium indices.
 * The function should return −1 if no equilibrium index exists.
 * For example, given array A shown above, the function may return 1, 3 or 7, as explained above.
 * @param {Array} A - array to process
 * @return {Int} - equilibrium index
 */
function arrayEquilibrium(A) {
  var leftSum = 0;
  var rightSum = 0;

  for (var i = 0; i < A.length; i++) {
    rightSum += A[i];
  }

  for (var e = 0; e < A.length; e++) {
    rightSum -= A[e];
    if (leftSum === rightSum) {
      console.log("\t -> arrayEquilibrium:", e);
      return e;
    }

    leftSum += A[e];
  }

  console.log("\t -> arrayEquilibrium:", -1);
  return -1;
}

var A = [-1, 3, -4, 5, 1, -6, 2, 1];
arrayEquilibrium(A);

function numRange(A) {
  var result = '(0-';
  var bArray = [];
  for (var i = 0; i < 100; i++) {
    bArray[i] = true;
  }

  for (var j = 0; j < A.length; j++) {
    bArray[A[j]] = false;
  }

  for (var k = 0; k < bArray.length; k++) {
    if (bArray[k] === false) {
      result += k - 1 + ', ' + (k + 1) + '-';
    }
  }

  result += bArray.length + ')';

  console.log("\t -> numRange:", result);
}

var A = [2, 50, 75, 89];
numRange(A);

/**
 * Task 1
 * @param {Int} X - integer to parse
 * @return {Int} largest - greatest integer after replacement
 */
function integerReplacement(X) {
  var string = X.toString();
  var largest = 0;

  for (var i = 0; i < string.length - 1; i++) {
    var firstNum = parseInt(string[i]);
    var secondNum = parseInt(string[i + 1]);

    // Cal average and cast to string
    var avg = Math.ceil((firstNum + secondNum) / 2).toString();

    // Append rest of string and replace the two nums with average
    var potential = parseInt(string.substring(0, i) + avg + string.substring(i + 2));
    largest = Math.max(largest, potential);
  }

  console.log("\t -> integerReplacement:", largest);
  return largest;
}

var X = 623315;
integerReplacement(X);

/**
 * Task 2
 * @param {String} S - directory listing
 * @return {Int} count - longest absolute path
 */
function longestAbsolutePath(S) {
  var files = S.split("\n");
  var count = 0;
  var indents = 0;

  for (var i = files.length - 1; i > 0; i--) {
    var line = files[i];
    var fileLength = line.trim().length;

    // Grab the indent count if it has an image
    if (line.indexOf('jpeg') > -1 || line.indexOf('gif') > -1) {
      indents = line.length - fileLength;
    }

    // Add filename to the absolute path + 1 for the '/'
    if (indents > line.length - fileLength) {
      count += fileLength + 1;
      indents--;
    }
  }

  console.log("\t -> longestAbsolutePath:", count);
  return count;
}

var input = "dir1\n dir11\n dir12\n  picture.jpeg\n  dir121\n  file1.txt\ndir2\n file2.gif";
longestAbsolutePath(input);
