/**
 * 29 - Bracket Validator
 * @param {String} s - combo of brackets and parens
 * @return {Bool} - whether it is a valid pair or not
*/
function bracketValidator(s) {
  var res;
  var stack = [];
  var map = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }

  for (let bracket of s) {
    let closingParen = map[bracket];
    if (closingParen) {
      stack.push(closingParen);
    } else if (stack.length === 0 || stack.pop() !== bracket) {
      console.log("\t -> validParentheses:", false);
      return false;
    }
  }

  res = stack.length === 0
  console.log("\t -> validParentheses:", res);
  return res;
}

var s = '{[(])}';
var s = '{[]()}';
bracketValidator(s);
