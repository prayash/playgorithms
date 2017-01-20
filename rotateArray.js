/**
 * Rotate an array of n elements to the right by k steps - O(n) time / O(1) space
 * The basic idea is that, if nums = [1,2,3,4,5,6,7] and k = 3, first we reverse [1,2,3,4], it becomes[4,3,2,1];
 * then we reverse[5,6,7], it becomes[7,6,5], then we reverse the whole array, it becomes[4,3,2,1,7,6,5] ---> [5,6,7,1,2,3,4].
 * Reverse is done by using two pointers, one point at the head and the other point at the tail, after switching these two,
 * these two pointers move one position towards the middle.
 * @param {Array} - array to rotate
 * @param {number} k - steps to rotate
 * @return {void} - Do not return anything, modify nums in-place instead.
 */

function rotateArrayNaive(A, k) {
  var temp, prev;
  for (var i = 0; i < k; i++) {
    prev = A[A.length - 1];

    for (var j = 0; j < A.length; j++) {
      temp = A[j];
      A[j] = prev;
      prev = temp;
    }
  }

  console.log(A);
}

function rotateArray(A, k) {
  function reverse(arr, i, j) {
    while (i < j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  k = k % A.length;
  reverse(A, 0, A.length - k - 1);
  reverse(A, A.length - k, A.length - 1);
  reverse(A, 0, A.length - 1);

  console.log(A);
}

var A = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotateArray(A, k);
rotateArrayNaive(A, k);
