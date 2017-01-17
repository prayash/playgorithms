'use strict';

/**
 * Maximal Subarray
 * Given an array of integers (positive/zero/negative), write a function that
 * calculates the maximum sum of any continuous subarray of the input array.
 * @param {Array} A - array.
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

function maximalSubarrayDP(A) {
  return;
}

var A = [-1, 5, 100, -1000];
maximalSubarrayNaive(A);
maximalSubarrayDP(A);
