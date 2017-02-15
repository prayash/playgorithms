/**
 * Merge Sorted Array - O(n) time / O(1) space
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
 * additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 * @param {Array} A - array of integers
 * @param {Array} B - array of integers
 * @return {void} - Do not return anything, modify A in-place instead.
 */
function mergeSortedArray(A, m, B, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (A[i] > B[j]) {
      A[k] = A[i];
      k--;
      i--;
    } else {
      A[k] = B[j];
      k--;
      j--;
    }

    // console.log(A);
  }

  while (j >= 0) {
    A[k] = B[j];
    k--;
    j--;

    // console.log(A);
  }

  console.log("\t -> mergeSortedArray:", A);
}

var A = [1, 2, 3, 0, 0, 0], m = 3;
var B = [2, 5, 6], n = 3;
var A = [4, 5, 6, 0, 0, 0], m = 3;
var B = [1, 2, 3], n = 3;
mergeSortedArray(A, m, B, n);
