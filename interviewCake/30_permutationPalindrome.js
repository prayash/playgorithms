/**
 * 30 - Permutation Palindrome
 * @param {String} s - input string
 * @return {Boolean}
*/
function permutationPalindrome(s) {
  var set = new Set();
  var res;

  for (var i in s) {
    var char = s[i];

    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  res = set.size <= 1;
  console.log('\t -> permutationPalindrome:', res);
  return res;
}

var s = 'civil';
permutationPalindrome(s);
