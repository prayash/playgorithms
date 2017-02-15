/**
 * Valid Anagram - O(n) time / O(n) space
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * For example, s = "anagram", t = "nagaram", return true. s = "rat", t = "car", return false.
 * @param {String} s - a String
 * @param {String} t - potential anagram of s
 * @return {Boolean} - whether it's a valid anagram
 */
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  var hash = {};
  var result = true;

  for (var c in s) {
    var char = s.charAt(c);
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  for (var c in t) {
    var char = t.charAt(c);
    hash[char]--;
    if (hash[char] < 0 || isNaN(hash[char])) result = false;
  }

  console.log("\t -> validAnagram:", result);
  return result;
}

var s = 'anagram';
var t = 'nagaram';
var s = 'rat';
var t = 'car';
var s = 'a';
var t = 'b';
validAnagram(s, t);
