'use strict';

/**
 * Stock Market Problem - O(n^2) time / O(1) space
 * Given an array of n integers (+/-/0) that represent the price of a stock over n days
 * write a function to compute the maximum profit you can make, given that you buy and sell
 * exactly 1 stock within these n days.
 * @param {Array} A - the input array
 * @return {int} - max profit
 */
function getMaxProfitNaive(A) {
  var max = 0;
  var n = A.length;

  for (var buy = 0; buy < n; buy++) {
    for (var sell = buy + 1; sell < n; sell++) {
      max = Math.max(A[sell] - A[buy], max);
    }
  }

  console.log("\t -> getMaxProfitNaive:", max);
  return max;
}

/**
 * We can reduce the problem into a maximal subarray problem - O(n) time / O(n) space
 * Think of the array in the maximal subarray as the deltas between the stock prices on consecutive days.
 * Create a new array deltas[n] where deltas[0] = 0, and deltas[i] = stocks[i] - stocks[i - 1]
 * Then apply the maximal subarray problem on the array deltas!
 */
function getMaxProfitReduced(A) {
  var deltas = [];

  deltas[0] = 0;
  for (var i = 1; i < A.length; i++) {
    deltas[i] = A[i] - A[i - 1];
  }

  var best = maximalSubarrayDP(deltas);
  console.log("\t -> getMaxProfitReduced:", best);
  return best;
}

/**
 * Remove unnecessary work! - O(n) time / O(1) space
 * Simply keep track of the minimum price we've EVER seen
 * and compare the subsequent numbers to find the maxProfit we've EVER seen
 */
function getMaxProfitOptimal(A) {
  if (A.length < 2) throw new Error("Getting profit requires at least 2 prices!");

  // Greedily update minPrice and maxProfit so they are initialized to the first possible profit
  var minPrice = A[0];
  var maxProfit = A[1] - minPrice;

  for (var i = 1; i < A.length; i++) {
    minPrice = Math.min(minPrice, A[i]);

    var potentialProfit = A[i] - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  console.log("\t -> getMaxProfitOptimal:", maxProfit);
  return maxProfit;
}

// ********************************************************

// returns 6 (buying for $5 and selling for $11)
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
getMaxProfitNaive(stockPricesYesterday);
getMaxProfitReduced(stockPricesYesterday);
getMaxProfitOptimal(stockPricesYesterday);

// ********************************************************

function maximalSubarrayDP(A) {
  var max = 0;
  var sp = [];

  sp[0] = Math.max(A[0], 0);
  for (var i = 1; i < A.length; i++) {
    sp[i] = Math.max(sp[i - 1] + A[i], 0);
  }

  // Linear search along table to grab final answer
  for (var j = 0; j < A.length; j++) {
    max = Math.max(max, sp[j]);
  }

  return max;
}
