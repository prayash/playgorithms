/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  s = s.trim();
  if (s === '')
    return 0;

  var count = 1;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ' && s[i + 1] !== ' ') {
      count++;
    }
  }
  return count;
};
