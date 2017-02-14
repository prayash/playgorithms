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
