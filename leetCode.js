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

/**
 * Remove Duplicates from Sorted Array - O(n) time / O(1) space
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * For example, given input array nums = [1, 1, 2], return length = 2, with the first two elements of nums being 1 and 2.
 * It doesn't matter what you leave beyond the new length.
 * @param {Array} A - array to modify
 * @return {Int} - final length of array
 */
function removeDuplicates(A) {
  var count = 0;
  for (var i = 1; i < A.length; i++) {
    if (A[i - 1] === A[i]) {
      count++;
    } else {
      A[i - count] = A[i];
    }
  }

  console.log("\t -> removeDuplicates:", A.length - count);
  return A.length - count;
};

var A = [1, 1, 2];
removeDuplicates(A);

/**
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * @param {Array} A - array to modify
 * @param {Int} val - target value to remove
 * @return {Int} - final length of array
 */
function removeElement(A, val) {
  var i = 0;
  var n = A.length;

  while (i < n) {
    if (A[i] === val) {
      // Swap current element with the last element in the array and then dispose the last
      A[i] = A[n - 1];
      n--;
    } else {
      i++
    }
  }

  console.log("\t -> removeElement:", "inputSize:", A.length, "| outputSize:", n);
  return n;
}

var A = [3, 2, 2, 3];
var val = 2;
removeElement(A, val);

/**
 * Two Sum - O(n) time / O(1) space
 * Given an array of integers that is already sorted in ascending order
 * find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2. Returned answers (both index1 and index2) are not zero-based.
 * @param {Array} A - array of integers
 * @param {Int} t - target int
 * @return {Int[]}
 */
var twoSum = function(A, t) {
  var lo = 0;
  var hi = A.length - 1;
  var result = [];

  while (A[lo] + A[hi] != t) {
    if (A[lo] + A[hi] < t) {
      lo++;
    } else {
      hi--;
    }
  }

  result = [lo + 1, hi + 1];
  console.log("\t -> twoSum:", result);
  return result;
};

var A = [2, 3, 4];
// var A = [0, 0, 3, 4];
var t = 6;
// var t = 0;
twoSum(A, t);

/**
 * Reverse a string.
 * @param {String} str - string to reverse
 * @return {String} - reversed string
 */
function reverseString(str) {
  var i = 0;
  var j = str.length - 1;
  str = str.split('');

  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }

  str = str.join('');
  console.log("\t -> reverseString:", str);
  return str;
}

var str = 'hello';
reverseString(str);

/**
 * Rotate Array - O(n) time / O(1) space
 * Rotate an array of n elements to the right by k steps
 * The basic idea is that, if nums = [1,2,3,4,5,6,7] and k = 3, first we reverse [1,2,3,4], it becomes[4,3,2,1];
 * then we reverse[5,6,7], it becomes[7,6,5], then we reverse the whole array, it becomes[4,3,2,1,7,6,5] ---> [5,6,7,1,2,3,4].
 * Reverse is done by using two pointers, one point at the head and the other point at the tail, after switching these two,
 * these two pointers move one position towards the middle.
 * @param {Array} A - array to rotate
 * @param {number} k - steps to rotate
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
function rotateArray(A, k) {
  k = k % A.length;
  reverse(A, 0, A.length - k - 1);
  reverse(A, A.length - k, A.length - 1);
  reverse(A, 0, A.length - 1);

  console.log("\t -> rotateArray:", A);
}

var A = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotateArray(A, k);

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

/**
 * Move Zeroes - O(n) time / O(1) space
 * Given an array, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * You must do this in-place without making a copy of the array.
 * @param {Array} A - array of nums
 * @return {Array} - modified array
 */
function moveZeroes(A) {
  if (A.length < 2) return;

  var i = 0, j = 0;
  while (j < A.length) {
    if (A[i] === 0) {
      j++;
    } else {
      i++;
      j = i + 1;
    }

    if (A[j] !== 0 && A[j] !== undefined && A[i] === 0) {
      swap(A, i, j);
      i++;
    }
  }

  console.log("\t -> moveZeroes:", A);
  return;
}

var A = [0, 1, 0, 3, 12];
moveZeroes(A);

/**
 * Container With Most Water - O(n) time / O(1) space
 * Given n non-negative integers [a1, a2, ..., an] where each represents a point at coordinate (i, ai),
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 * @param {Array} A - heights
 * @return {Array} - modified array
 */
function maxArea(A) {
  if (A.length < 2) return;

  // O(n^2) time / O(1) space
  function naive() {
    var maxArea = 0;
    for (var  i = 0; i < A.length; i++) {
      for (var j = i + 1; j < A.length; j++) {
        var width = j - i;
        var height = Math.min(A[j], A[i]);
        var currentArea = width * height;
        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }

  var i = 0, j = A.length - 1;
  var maxArea = 0;
  while (i < j) {
    var height = Math.min(A[i], A[j]);
    maxArea = Math.max(maxArea, (j - i) * height);
    while (A[i] <= height && i < j) i++;
    while (A[j] <= height && i < j) j--;
  }

  console.log("\t -> maxArea:", maxArea);
  return maxArea;
}

var A = [1, 1];
maxArea(A);

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
 * Valid Anagram - O(n) time / O(n) space
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * For example, s = "anagram", t = "nagaram", return true. s = "rat", t = "car", return false.
 * @param {String} s - a String
 * @param {String} t - potential anagram of s
 * @return {Boolean} - whether it's a valid anagram
 */
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  var hash = {};
  var result = true;

  for (var c in s) {
    var char = s.charAt(c);
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  for (var c in t) {
    var char = t.charAt(c);
    hash[char]--;
    if (hash[char] < 0 || isNaN(hash[char])) result = false;
  }

  console.log("\t -> validAnagram:", result);
  return result;
}

var s = 'anagram';
var t = 'nagaram';
var s = 'rat';
var t = 'car';
var s = 'a';
var t = 'b';
validAnagram(s, t);

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
 * Needle in a Haystack - O(n) time / O(1) space
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {String} haystack - main string
 * @param {String} needle - substring to find in haystack
 * @return {Int} - index of the first occurence of needle
 */
function strStr(haystack, needle) {
  var m = haystack.length;
  var n = needle.length;

  if (!n) return 0;
  for (var i = 0; i < m - n + 1; i++) {
    var j = 0;
    while (j < n) {
      if (haystack[i + j] != needle[j]) break;
      j++;
    }

    if (j == n) {
      console.log("\t -> strStr:", i);
      return i;
    }
  }

  console.log("\t -> strStr:", -1);
  return -1;
}

var haystack = "mississippi";
var needle = "mississippi";
strStr(haystack, needle);

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
 * Valid Parentheses - O(n) time / O(1) space
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {String} s - string to check
 * @return {Boolean} - whether the parentheses are valid
 */
function validParentheses(s) {
  var result = false;
  var stack = [];
  var map = { '(': ')', '{': '}', '[': ']' };

  s = s.split('');
  for (var c in s) {
    var char = s[c];
    var closingParen = map[char];
    if (closingParen) {
      stack.push(closingParen);
    } else if (stack.length === 0 || stack.pop() !== char) {
      console.log("\t -> validParentheses:", false);
      return false;
    }
  }

  result = stack.length === 0 ? true : false;
  console.log("\t -> validParentheses:", result);
  return result;
}

var s = '()[]{}';
var s = '([)]';
var s = '){';
validParentheses(s);

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

/**
 * Max Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * @param {Array} - Array of 1s and 0s
 * @return {Int} - max consecutive
 */
function findMaxConsecutiveOnes(A) {
  var count = 0;
  var max = 0;

  for (var i = 0; i < A.length; i++) {
    max = Math.max(max, count = A[i] === 0 ? 0 : count + 1);
  }

  console.log("\t -> findMaxConsecutiveOnes:", max);
  return max;
}

var A = [1, 1, 0, 1, 1, 1];
findMaxConsecutiveOnes(A);

/**
 * Majority Element
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {Array} - array of integers
 * @return {Int} - majority element
 */
function majorityElement(A) {
  var count = 0;
  var majorityElement;

  for (var i = 0; i < A.length; i++) {
    if (count === 0) {
      majorityElement = A[i];
    }

    if (A[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  for (var j = 0; j < A.length; j++) {
    if (A[j] === majorityElement) {
      count++;
    }
  }

  if (count > Math.floor(A.length / 2)) {
    console.log("\t -> majorityElement:", majorityElement);
    return majorityElement;
  }

  console.log("\t -> majorityElement:", -1);
  return -1;
}

var A = [1, 2, 3, 2, 2, 2, 3, 2, 2];
majorityElement(A);
