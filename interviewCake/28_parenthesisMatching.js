/**
 * 28 - Parenthesis Matching - O(n) time / O(1) space
 * @param {String} s - string to check
 * @return {Boolean} - whether the parentheses are valid
 */
function parenthesisMatching(s) {
  var counter = 0;

  for (var pos = 0; pos < s.length; pos++) {
    var char = s[pos];

    if (char === '(') {
      counter++;
    } else if (char === ')') {
      counter--;
      
      if (counter === 0) {
        console.log(pos);
        return pos;
      }
    }
  }
}

var s = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
parenthesisMatching(s);
