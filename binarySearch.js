function binarySearch(arr, key) {
  var found = false;
  while (!found) {
    if (key < arr[Math.floor(arr.length / 2)]) {
      return binarySearch(arr.splice(0, Math.floor(arr.length / 2)), key);
    } else if (key > arr[Math.floor(arr.length / 2)]) {
      return binarySearch(arr.splice(Math.floor(arr.length / 2), Math.floor(arr.length / 2)), key);
    } else {
      found = true;
      return arr.indexOf(key);
    }
  }
  return false;
}

var array = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];
var key = 47;

console.log(binarySearch(array, key));
