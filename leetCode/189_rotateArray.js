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
