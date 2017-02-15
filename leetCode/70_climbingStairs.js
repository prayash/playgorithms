/**
 * 70 - Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {Int} n - amount of steps to reach top of steps
 * @return {} - meeting times merged
 */
function climbingStairs(n) {
  var v1 = 2;
  var v2 = 1;
  var res;

  if (n == 1)      return v2;
  else if (n == 2) return v1;

  for (var i = 3; i <= n; i++) {
    res = v1 + v2;
    v2 = v1;
    v1 = res;
  }

  console.log("\t -> climbingStairs:", res);
  return res;
}

climbingStairs(8);
