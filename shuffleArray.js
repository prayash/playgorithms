'use strict';

/**
 * Swaps two values in an array.
 * @param {Array} arr - array containing the items.
 * @param {int} x - index of first item to swap.
 * @param {int} y - index of second item to swap.
 * @return {void}
 */
function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

/**
 * Knuth Shuffle - O(n)
 * Shuffles an array such that all permutations are equally likely
 * @param {Array} A - array to be shuffled.
 * @return {Array} - the shuffled array
 */
function shuffleArray(A) {
  var shuffled = 0;
  var randI;
  var n = A.length;

  while (shuffled < n) {
    // Math.random() * (max - min) + min;
    swap(A, shuffled, Math.floor(Math.random() * (n - shuffled) + shuffled));
    shuffled++;
  }

  console.log(A);
  return A;
}

var A = [5, 3, 6, 1, 7, 11, -3];
shuffleArray(A);
