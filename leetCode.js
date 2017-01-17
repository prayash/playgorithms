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
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * @param {Array} A
 * @param {Int} val
 * @return {Int} - final length of array
 */

function removeElement(A, val) {
  var i = 0;
  var n = A.length;

  while (i < n) {
    if (A[i] === val) {
      // Swap current element with the last element in the array and then dispose the last
      A[i] = A[n - 1];
      n--;
    } else {
      i++
    }
  }

  console.log("\t -> removeElement:", "Original size:", A.length, "| New size:", n);
  return n;
}

var A = [3, 2, 2, 3];
var val = 2;
removeElement(A, val);

/**
 * Reverse a string.
 * @param {String} - string to reverse
 * @return {String} - reversed string
 */
function reverseString(str) {
  var i = 0;
  var j = str.length - 1;
  str = [...str];

  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }

  console.log("\t -> reverseString:", str.toString());
  return str;
}

var str = 'hello';
reverseString(str);
