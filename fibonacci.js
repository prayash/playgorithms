// Brute Force
// Time Com­plex­ity: O(2^n)
function fibNaive(n) {
  return n <= 1 ? n : fibNaive(n - 1) + fibNaive(n - 2);
}

// Memoization
// Time Com­plex­ity: O(n), Space Com­plex­ity: O(n)
function fibDP(n) {
  var fib = [n + 1];

  fib[0] = 0;
  fib[1] = 1;

  for (var i = 2; i < n + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

var i = 50;
console.log("DP:", fibDP(i));
console.log("Naive:", fibNaive(i));
