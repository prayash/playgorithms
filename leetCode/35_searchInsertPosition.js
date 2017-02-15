/**
 * Search Insert Position - O(log n) time / O(1) space
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
 * additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 * @param {Array} A - array of integers
 * @param {Array} B - array of integers
 * @return {void} - Do not return anything, modify A in-place instead.
 */
function searchInsert(A, t) {
  var low = 0, high = A.length;

  while (low < high) {
    var mid = Math.floor(low + (high - low) / 2);

    if (A[mid] < t) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  console.log("\t -> searchInsert:", low);
  return low;
}

var A = [1, 3, 5, 6];
var t = 7;
searchInsert(A, t);
