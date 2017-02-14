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
