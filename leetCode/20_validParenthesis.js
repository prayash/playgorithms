/**
 * Valid Parentheses - O(n) time / O(1) space
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {String} s - string to check
 * @return {Boolean} - whether the parentheses are valid
 */
function validParentheses(s) {
  var result = false;
  var stack = [];
  var map = { '(': ')', '{': '}', '[': ']' };

  s = s.split('');
  for (var c in s) {
    var char = s[c];
    var closingParen = map[char];
    if (closingParen) {
      stack.push(closingParen);
    } else if (stack.length === 0 || stack.pop() !== char) {
      console.log("\t -> validParentheses:", false);
      return false;
    }
  }

  result = stack.length === 0;
  console.log("\t -> validParentheses:", result);
  return result;
}

var s = '()[]{}';
var s = '([)]';
var s = '){';
validParentheses(s);
