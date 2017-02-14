/**
 * Majority Element - O(n) time / O(1) space
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {Array} A - array of integers
 * @return {Int} - majority element
 */
function majorityElement(A) {
  var count = 0;
  var majorityElement;

  for (var i = 0; i < A.length; i++) {
    if (count === 0) {
      majorityElement = A[i];
    }

    if (A[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  for (var j = 0; j < A.length; j++) {
    if (A[j] === majorityElement) {
      count++;
    }
  }

  if (count > Math.floor(A.length / 2)) {
    console.log("\t -> majorityElement:", majorityElement);
    return majorityElement;
  }

  console.log("\t -> majorityElement:", -1);
  return -1;
}

var A = [1, 2, 3, 2, 2, 2, 3, 2, 2];
majorityElement(A);
