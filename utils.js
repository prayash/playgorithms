/**
 * Returns a random integer between the specified values
 * @param {Int, Int} min, max
 * @return {Int}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Swaps two values in an array.
 * @param {Array} arr - array containing the items.
 * @param {int} x, y - index of first and second item to swap.
 * @return {void}
 */
function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

/**
 * Reverses an array.
 * @param {Array} arr - array to reverse.
 * @param {int} i, j - index to begin and end range.
 * @return {void}
 */
function reverse(arr, i, j) {
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

module.exports = {
  getRandomInt,
  swap,
  reverse
}
