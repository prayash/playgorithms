/**
 * 26 - Reverse String - O(n) time / O(1) space
 * @param {String} s
 * @return
 */
function reverseString(s) {
  var res;
  var array = s.split('');

  var i = 0, j = array.length - 1;
  while (i < j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++; j--;
  }

  res = array.join('');

  console.log('\t -> reverseString:', res);
  return res;
}

var s = 'hello';
reverseString(s);
