/**
 * Longest Increasing Subsequence
 * @param {Array of Ints} A - input array of Ints
 * @return {} - meeting times merged
 */
function longestIncreasingSub(A) {
  var res = Array.apply(null, Array(A.length)).map(Number.prototype.valueOf, 0);
  res[0] = 1;

  var maxAns = 1;
  for (var i = 1; i < res.length; i++) {
    var maxVal = 0;
    for (var j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        maxVal = Math.max(maxVal, res[j]);
      }
    }

    res[i] = maxVal + 1;
    maxAns = Math.max(maxAns, res[i]);
  }

  console.log("\t -> longestIncreasingSub:", res);
  return maxAns;
}

var A = [10, 9, 2, 5, 3, 7, 101, 18];
longestIncreasingSub(A);
