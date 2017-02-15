/**
 * Max Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * @param {Array} - Array of 1s and 0s
 * @return {Int} - max consecutive
 */
function maxConsecutiveOnes(A) {
  var count = 0;
  var max = 0;

  for (var i = 0; i < A.length; i++) {
    max = Math.max(max, count = A[i] === 0 ? 0 : count + 1);
  }

  console.log("\t -> maxConsecutiveOnes:", max);
  return max;
}

var A = [1, 1, 0, 1, 1, 1];
maxConsecutiveOnes(A);
