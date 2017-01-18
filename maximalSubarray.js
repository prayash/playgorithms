'use strict';

/**
 * Maximal Subarray -  O(n^3) time / O(1) subproblemace
 * Given an array of integers (positive/zero/negative), write a function that
 * calculates the maximum sum of any continuous subarray of the input array.
 * @param {Array} A - the input array
 * @return {int} - max sum of a continuous subarray
 */
function maximalSubarrayNaive(A) {
  var n = A.length;
  var max = 0;

  for (var start = 0; start < n; start++) {
    for (var end = start; end < n; end++) {
      var sum = 0;

      for (var i = start; i <= end; i++) {
        sum += A[i];
      }

      max = Math.max(max, sum);
    }
  }

  console.log(max);
  return max;
}

/**
 * Maximal Subarray -  O(n) time / O(n) space
 * Original Problem - Find the maximum sum of any subarray in the range [0...n-1]
 * Subproblem - Find the maximum sum of any subarray starting at any index in the range [0...i] and ending at i
 * Recurrence is subproblem[i] = max(subproblem[i - 1] + array[i], 0)
 * @param {Array} A - the input array
 * @return {int} - max sum of a continuous subarray
 */
function maximalSubarrayDP(A) {
  var max = 0;
  var subproblem = [];

  subproblem[0] = Math.max(A[0], 0);
  for (var i = 1; i < A.length; i++) {
    subproblem[i] = Math.max(subproblem[i - 1] + A[i], 0);
  }

  // Linear search along table to grab final answer
  for (var j = 0; j < A.length; j++) {
    max = Math.max(max, subproblem[j]);
  }

  console.log(max);
  return max;
}

var A = [-1, 5, 100, -1000];
maximalSubarrayNaive(A);
maximalSubarrayDP(A);


module.exports = maximalSubarrayDP;
