// Solve a^3 + b^3 = c^3 + d^3 (1 <= a, b, c, d <= 1000)
function getPairs(n) {
  var map = {};

  function suboptimal(n) {
    for (var a = 1; a <= n; a++) {
      for (var b = 1; b <= n; b++) {
        for (var c = 1; c <= n; c++) {
          for (var d = 1; d <= n; d++) {
            if (Math.pow(a, 3) + Math.pow(b, 3) == Math.pow(c, 3) + Math.pow(d, 3)) {
              console.log(a, b, c, d);
            }
          }
        }
      }
    }
  }

  function optimal(n) {
    for (var c = 1; c <= n; c++) {
      for (var d = 1; d <= n; d++) {
        var result = Math.pow(c, 3) + Math.pow(d, 3);
        map[result] = {c: c, d: d}
        // console.log(map[result]);
      }
    }

    for (var a = 1; a <= n; a++) {
      for (var b = 1; b <= n; b++) {
        var result = Math.pow(a, 3) + Math.pow(b, 3);
        var pair = map[result];

        for (p in pair) {
          console.log(a, b, pair);
        }
      }
    }
  }

  optimal(n);
}

// console.log("\t -> ", getPairs(100));

// ************************************************************************************

function findPairsWithSum(array, sum) {
  var hash = {};

  function bruteForce() {
    for (var i = 0; i < array.length; i++) {
      for (var k = 1; k < array.length; k++) {
        if (array[i] + array[k] === sum) {
          hash[array[i]] = array[k];
          console.log("\t \t", array[i], "and", array[k], "sum to", sum);
        }
      }
    }
    return hash;
  }

  function elegant() {
    for (var i = 0; i < array.length; i++) {
      var e = array[i];
      var diff = sum - e;

      hash[e] = i;
      if (hash[diff] != i && hash[diff] !== undefined) {
        console.log("\t -> Pair:", array[hash[diff]], "&", array[i], "has sum", sum);
      }
    }

    // Store all elements in a hash table. Then iterate through looking for the difference that could satisfy the sum!
    // [5, 15, 8, 9, 3, 2, -1, 4];
    // { 5 : 0 }
    // { 15: 1 }
    // { 8 : 2 }
    // { 9 : 3 }
    // { 3 : 4 }
    // { 2 : 5 }
    // { -1 : 6 }
    // { 4 : 7 }

    return hash;
  }

  // return bruteForce();
  return elegant();
}

var A = [5, 15, 8, 9, 3, 2, -1, 4];
// var A = [0, 0, 3, 4];
var t = 7;
// var t = 0;
findPairsWithSum(A, t);

// ************************************************************************************
