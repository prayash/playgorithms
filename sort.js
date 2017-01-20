'use strict';

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log("\t - unsoredArray: ", arr);

// *****************************************************************

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
 * Bubble Sort - O(n²) time / O(1) space
 * Pass through the data from one end to the other, and swap two adjacent elements
 * whenever the first is greater than the last.
 * Thus, the smallest elements will “bubble” to the surface.
 * Additionally, it is a stable sort that requires no additional memory, since all swaps are made in place.
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  console.log("\t > bubbleSort:", "\t ", arr);
  return arr;
}

bubbleSort(arr);

/**
 * Insertion Sort - O(n²) time / O(1) space
 * Insertion Sort works very efficiently for lists that are nearly sorted initially.
 * Furthermore, it can also work on data sets that are constantly being added to.
 * For instance, if one wanted to maintain a sorted list of the highest scores achieved in a game,
 * an insertion sort would work well, since new elements would be added to the data as the game was played.
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = i;
    while (j > 0 && arr[i] < arr[j - 1]) {
      j--;
    }

    var tmp = arr[i];
    for (var k = i; k > j; k--) {
      arr[k] = arr[k - 1];
    }

    arr[j] = tmp;
  }

  console.log("\t > insertionSort:", arr);
  return arr;
}

insertionSort(arr);

/**
 * Merge Sort - O(n log n) time / O(n) space
 * A merge sort works recursively using dive-and-conquer.
 * First it divides a data set in half, and sorts each half separately.
 * Next, the first elements from each of the two lists are compared.
 * The lesser element is then removed from its list and added to the final result list.
 * Each recursive call has O(n) runtime, and a total of O(log n) recursions are required.
 * The runtime of this algorithm is O(n * log n).
 * @param {Array} arr - the unsorted array
 * @return {Array} arr - the sorted array
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/**
 * Merges two arrays in order based on their natural
 * relationship.
 * @param {Array} left - the first array to merge.
 * @param {Array} right - the second array to merge.
 * @return {Array} the merged array.
 */
function merge(left, right) {
  const result = [];
  let iL = 0;
  let iR = 0;

  while (iL < left.length && iR < right.length) {
    if (left[iR] < right[iR]) {
      result.push(left[iL]);
      iL++;
    } else {
      result.push(right[iR]);
      iR++;
    }
  }

  return result.concat(left.slice(iL)).concat(right.slice(iR));
}

console.log("\t > mergeSort: \t ", mergeSort(arr));

/**
 * Heap Sort -  O(n log n) time / O(n) space
 * In a heap sort, we create a heap data structure.
 * A heap stores data in a tree such that the smallest (or largest) element is always the root node.
 * To perform a heap sort, all data from a list is inserted into a heap, and then the root element is
 * repeatedly removed and stored back into the list. Since the root element is always the smallest element,
 * the result is a sorted list.
 * Heap sort has the disadvantage of not being stable, and is somewhat more complicated to understand beyond just the basic implementation.
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function heapSort(arr, cmp) {
  function comparator(a, b) {
    return a - b;
  }

  /**
   * Finds the correct place of given element in given max heap.
   * @param {Array} array Array.
   * @param {Number} index Index of the element which place in the max heap should be found.
   * @param {Number} heapSize Size of the heap.
   * @param {function} cmp Comparison function.
   */
  function heapify(array, index, heapSize, cmp) {
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var largest = index;
    if (left < heapSize && cmp(array[left], array[index]) > 0) {
      largest = left;
    }
    if (right < heapSize && cmp(array[right], array[largest]) > 0) {
      largest = right;
    }
    if (largest !== index) {
      var temp = array[index];
      array[index] = array[largest];
      array[largest] = temp;
      heapify(array, largest, heapSize, cmp);
    }
  }

  /**
   * Builds max heap from given array.
   * @param {Array} array Array which should be turned into max heap.
   * @param {function} cmp Comparison function.
   * @return {Array} array Array turned into max heap.
   */
  function buildMaxHeap(array, cmp) {
    for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      heapify(array, i, array.length, cmp);
    }
    return array;
  }

  cmp = cmp || comparator;
  var size = arr.length;
  var temp;
  buildMaxHeap(arr, cmp);
  for (var i = arr.length - 1; i > 0; i -= 1) {
    temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    size -= 1;
    heapify(arr, 0, size, cmp);
  }
  
  return arr;
}

console.log("\t > heapSort: \t ", heapSort(arr));

/**
 * Quick Sort -  O(n^2) time / O(n) space
 * Quicksort is a divide and conquer algorithm in the style of merge sort.
 * The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such
 * that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater
 * than the pivot value. After that, recursively perform the same operation on the items before and after the pivot.
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function quickSort(arr, left, right) {
  if (arr.length < 1) return;

  function partition(data, left, right) {
    var pivot = data[Math.floor((right + left) / 2)];
    var i = left, j = right;

    while (i <= j) {
      while (data[i] < pivot) i++;
      while (data[j] > pivot) j--;

      swap(data, i, j);
      i++;
      j--;
    }

    return i;
  }

  var index;
  index = partition(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }

  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}

console.log("\t > quickSort: \t ", quickSort(arr, 0, arr.length - 1));
