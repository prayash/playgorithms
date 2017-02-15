/**
 * 6 - Making Change
 * @param {Array of Ints} A - input array of denominations
 * @return {} - meeting times merged
 */
function makingChange(amount, A) {
  var res = [];
  for (var i = 0; i <= amount; i++) {
   res[i] = 0;
  }
  res[0] = 1;

  A.forEach((coin) => {
    for (var i = coin; i <= amount; i++) {
      var remainder = i - coin;
      res[i] += res[remainder];
    }
  })

  console.log("\t -> makingChange:", res);
  return res;
}

makingChange(5, [1, 3, 5]);
