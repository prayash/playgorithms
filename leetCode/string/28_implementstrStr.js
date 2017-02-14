/**
 * Needle in a Haystack - O(n) time / O(1) space
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {String} haystack - main string
 * @param {String} needle - substring to find in haystack
 * @return {Int} - index of the first occurence of needle
 */
function strStr(haystack, needle) {
  var m = haystack.length;
  var n = needle.length;

  if (!n) return 0;
  for (var i = 0; i < m - n + 1; i++) {
    var j = 0;
    while (j < n) {
      if (haystack[i + j] != needle[j]) break;
      j++;
    }

    if (j == n) {
      console.log("\t -> strStr:", i);
      return i;
    }
  }

  console.log("\t -> strStr:", -1);
  return -1;
}

var haystack = "mississippi";
var needle = "mississippi";
strStr(haystack, needle);
