'use strict';

/**
 * Binary Search - O(log n) time / O(1) space
 * Given a sorted array of integers, return the index of the given key. Return -1 if not found.
 * @param {Array} arr - the array to search
 * @param {Int} key - target value
 * @return {int} - the index of target value, or -1 if not found
 */
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === key) return mid;

    if (key > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let array = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];
let key = 47;

console.log(binarySearch(array, key));
