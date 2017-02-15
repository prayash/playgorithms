/**
 * Pascal's Triangle
 * Given numRows, generate the first numRows of Pascal's triangle.
 * @param {Int} numRows - rows to generate
 * @return {Array of Arrays} - final triangle
 */
function pascalsTriangle(numRows) {
  var res = [];

  for (var i = 0; i < numRows; i++) {
    res.push(Array.apply(null, new Array(i + 1)).map(Number.prototype.valueOf, 1));
    for (var j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  console.log("\t -> pascalsTriangle:", res);
  return res;
};

pascalsTriangle(5);
