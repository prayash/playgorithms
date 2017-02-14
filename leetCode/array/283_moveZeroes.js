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
