/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * @param {Array} A - array of Ints
 * @return {Array} - array of disappeared numbers
 */
function findDisappearedNumbers(A) {
  var res = [];

  for (var i = 0; i < A.length; i++) {
    var e = A[i];

    if (A[Math.abs(e) - 1] > 0) {
      A[Math.abs(e) - 1] = -1 * A[Math.abs(e) - 1];
    }
  }

  for (var j = 1; j <= A.length; j++) {
    if (A[j - 1] > 0) {
      res.push(j);
    }
  }

  // console.log(A);
  console.log("\t -> findDisappearedNumbers:", res);
  return res;
};

var A = [4, 3, 2, 7, 8, 2, 3, 1];
findDisappearedNumbers(A);
