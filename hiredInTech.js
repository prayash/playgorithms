function zigZag(seq) {

}

var sequence = [];
console.log("\t -> zigZag:", zigZag(sequence));

/**
 * You are given a list of non-negative integers and you start at the left-most integer in this list.
 * After that you need to perform the following step:
 * Given that the number at the position where you are now is P you need to jump P positions to the right in the list.
 * For example, if you are at position 6 and the number at position 6 has the value 3, you need to jump to position 6 + 3 = 9.
 * Repeat this operation until you reach beyond the right-side border of the list.
 * Your program must return the number of jumps that it needs to perform following this logic.
 * Note that the list may contain the number 0, which mean that you can get stuck at a this position forever.
 * In such cases you must return the number -1.
 * The length N of the input list will be in the range [1, 1000].
 * @param {Array} A - The string to be checked for uniqueness
 * @return {Int} - number of jumps
 */
function jumpOverNumbers(A) {
  var reachedEnd = false;
  var i = 0;
  var jumps = 0;

  while (!reachedEnd) {
    if (A[i] === 0) {
      return -1;
    }

    i += A[i];
    jumps++;

    if (i === A.length) {
      reachedEnd = true;
      console.log("\t -> jumpOverNumbers:", A, jumps);
      return jumps;
    }
  }
}

var A = [3, 4, 1, 2, 5, 6, 9, 0, 1, 2, 3, 1];
jumpOverNumbers(A);

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

  console.log("\t -> digitSum:", acc);
  return acc;
}

var n = 10;
// var n = -10;
// var n = -3456;
// var n = 2;
var n = 1325132435356;
digitSum(n);

/**
 * Implement a program, which given an integer n, computes the sum of its digits.
 * If a negative number is given, the function should work as if it was positive.
 * For example, if n is 1325132435356, the digit's sum is 43. If n is -10, the sum is 1 + 0 = 1.
 * In the test cases for this task we will have that -2^63 < n < 2^63
 * @param {Int} n - random integer
 * @return {Int} - sum of all the digits
 */
function sortTheFiles(N, list) {
  for (var i = 1; i <= N; i++) {
    var item = 'IMG';
    item += i.toString();
    item += '.jpg';
    list[i] = item;
  }

  list = list.sort();
  console.log("\t -> sortTheFiles:", list.toString());
  return list;
}

var N = 16;
var list = [];
sortTheFiles(N, list);
