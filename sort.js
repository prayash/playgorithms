var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

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
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
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
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function mergeSort(arr) {
  if (arr.length == 1) return arr;


  var middle = Math.floor(arr.length / 2);
  var left = mergeSort(arr.splice(0, middle - 1));
  var right = mergeSort(arr.splice(middle, arr.length - 1));
  var result = [];

  var dPtr = 0, lPtr = 0, rPtr = 0;
  while (dPtr < arr.length) {
    if (lPtr == left.length) {
      result[dPtr] = right[rPtr];
      rPtr++;
    } else if (rPtr == right.length) {
      result[dPtr] = left[lPtr];
      lPtr++;
    } else if (left[lPtr] < right[rPtr]) {
      result[dPtr] = left[lPtr];
      lPtr++;
    } else {
      result[dPtr] = right[rPtr];
      rPtr++;
    }
    dPtr++;
  }

  console.log("\t > mergeSort:\t ", result);
  return result;
}

// mergeSort(arr);

/**
 * Heap Sort -  O(n log n) time / O(n) space
 * In a heap sort, we create a heap data structure.
 * A heap stores data in a tree such that the smallest (or largest) element is always the root node.
 * To perform a heap sort, all data from a list is inserted into a heap, and then the root element is
 * repeatedly removed and stored back into the list. Since the root element is always the smallest element, the result is a sorted list.
 * Heap sort has the disadvantage of not being stable, and is somewhat more complicated to understand beyond just the basic implementation.
 * @param {Array} arr - The unsorted array
 * @return {Array} arr - The sorted array
 */
function heapSort(arr) {
  
}
