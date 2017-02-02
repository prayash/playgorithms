/**
 * 1 - Apple Stocks - O(n) time / O(1) space
 * @param {Array} A - the input array
 * @return {int} - max profit
 */
function getMaxProfit(A) {
  if (A.length < 2) throw new Error("Getting profit requires at least 2 prices!");

  // Remove unnecessary work! - O(n) time / O(1) space
  // Simply keep track of the minimum price we've EVER seen
  // and compare the subsequent numbers to find the maxProfit we've EVER seen
  // Greedily update minPrice and maxProfit so they are initialized to the first possible profit
  var minPrice = A[0];
  var maxProfit = A[1] - minPrice;

  for (var i = 1; i < A.length; i++) {
    minPrice = Math.min(minPrice, A[i]);

    var potentialProfit = A[i] - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  function getMaxProfitNaive() {
    var max = 0;
    var n = A.length;

    for (var buy = 0; buy < n; buy++) {
      for (var sell = buy + 1; sell < n; sell++) {
        max = Math.max(A[sell] - A[buy], max);
      }
    }
    return max;
  }

  console.log("\t -> getMaxProfit:", maxProfit);
  return maxProfit;
}

// returns 6 (buying for $5 and selling for $11)
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
getMaxProfit(stockPricesYesterday);

/**
 * 2 - Product of All Other Numbers - O(n) time / O(n) space
 * @param {Array} A - array of integers
 * @return {Array} - array of products
 */
function productOfAllIntsExceptAtIndex(A) {
  var res = [];

  var productSoFar = 1;
  for (var i in A) {
    res[i] = productSoFar;
    productSoFar *= A[i];
  }

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

/**
 * 3 - Highest Product of 3 - time / space
 * @param {Array} A - array of integers
 * @return {Int} - highest product of the integers
 */
function highestProductOf3(A) {
  var res = 0;



  console.log('\t -> highestProductOf3:', res);
  return res;
}
