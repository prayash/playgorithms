/**
 * Reverse a string.
 * @param {String} str - string to reverse
 * @return {String} - reversed string
 */
function reverseString(str) {
  var i = 0;
  var j = str.length - 1;
  str = str.split('');

  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }

  str = str.join('');
  console.log("\t -> reverseString:", str);
  return str;
}

var str = 'hello';
reverseString(str);
