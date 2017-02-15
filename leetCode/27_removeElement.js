/**
 * Remove Element - Given an array and a value, remove all instances of that value in place and return the new length.
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
