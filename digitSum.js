/**
 * Implement a program, which given an integer n, computes the sum of its digits.
 * If a negative number is given, the function should work as if it was positive.
 * For example, if n is 1325132435356, the digit's sum is 43. If n is -10, the sum is 1 + 0 = 1.
 * In the test cases for this task we will have that -2^63 < n < 2^63
 * @param {Int} n - random integer
 * @return {Int} - sum of all the digits
 */
function digitSum(n) {
  var acc = 0;
  var pos = Math.abs(n);
  var digits = pos.toString();

  for (d in digits) {
    var digit = digits.charAt(d);
    acc += parseInt(digit);
  }

  console.log(acc);
  return acc;
}

var n = 10;
// var n = -10;
// var n = -3456;
// var n = 2;
var n = 1325132435356;

digitSum(n);
