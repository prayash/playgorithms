/**
 * 2 - Product of All Other Numbers - O(n) time / O(n) space
 * @param {Array} A - array of integers
 * @return {Array} - array of products
 */
function productOfAllIntsExceptAtIndex(A) {
  var res = [];

  // for each integer, find the product of all the integers
  // before it, storing the total product so far each time
  var productSoFar = 1;
  for (var i in A) {
    res[i] = productSoFar;
    productSoFar *= A[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (var j = A.length - 1; j >= 0; j--) {
    res[j] *= productSoFar;
    productSoFar *= A[j];
  }

  console.log('\t -> productOfAllIntsExceptAtIndex:', res);
  return res;
}

var A = [1, 7, 3, 4];
productOfAllIntsExceptAtIndex(A);
