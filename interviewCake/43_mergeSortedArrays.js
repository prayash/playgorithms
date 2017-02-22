/**
 * 43 - Merge Sorted Arrays
 * @param {Array} A1 - sorted array
 * @param {Array} A2 - sorted array
 * @return {Array} - final merged array
*/
function mergeSortedArrays(A1, A2) {
  var res = [];
  var i = 0;
  var j = 0;
  while (res.length < A1.length + A2.length) {

    var isA1Exhausted = (i >= A1.length);
    var isA2Exhausted = (j >= A2.length);

    if (!isA1Exhausted && (isA2Exhausted || (A1[i] < A2[j]))) {
      res.push(A1[i]);
      i++;
    } else {
      res.push(A2[j]);
      j++;
    }
  }

  console.log('\t -> mergeSortedArrays:', res);
  return res;
}

var A1 = [3, 4, 6, 10, 11, 15];
var A2 = [1, 5, 8, 12, 14, 19];
mergeSortedArrays(A1, A2);
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
