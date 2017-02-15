/**
 * Container With Most Water - O(n) time / O(1) space
 * Given n non-negative integers [a1, a2, ..., an] where each represents a point at coordinate (i, ai),
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 * @param {Array} A - heights
 * @return {Array} - modified array
 */
function containerWithMostWater(A) {
  if (A.length < 2) return;

  // O(n^2) time / O(1) space
  function naive() {
    var maxArea = 0;
    for (var  i = 0; i < A.length; i++) {
      for (var j = i + 1; j < A.length; j++) {
        var width = j - i;
        var height = Math.min(A[j], A[i]);
        var currentArea = width * height;
        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }

  var i = 0, j = A.length - 1;
  var maxArea = 0;
  while (i < j) {
    var height = Math.min(A[i], A[j]);
    maxArea = Math.max(maxArea, (j - i) * height);
    while (A[i] <= height && i < j) i++;
    while (A[j] <= height && i < j) j--;
  }

  console.log("\t -> containerWithMostWater:", maxArea);
  return maxArea;
}

var A = [1, 1];
containerWithMostWater(A);
