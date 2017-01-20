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
  console.log("\t -> twoSum:",result);
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
  str = [...str];

  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }

  console.log("\t -> reverseString:", str.toString().replace(/,/g, ''));
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
