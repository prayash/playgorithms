function findDup(arr) {
  var dict = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!dict[arr[i]]) {
      dict[arr[i]] = 1;
      console.log("dict state: ", dict);
    } else {
      result.push(arr[i]);
    }
  }
  console.log("dict: ", dict);
  return result;
}

console.log(findDup([1, 2, 4, 4, 3, 3, 5, 5, 1, 1, 9, 11, 11]));
