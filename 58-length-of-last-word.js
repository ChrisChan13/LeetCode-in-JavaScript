/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var l = 0;
  for (var i = s.length - 1; i >= 0; i --) {
    if (s[i] === ' ' && l > 0) break;
    else if (s[i] !== ' ') l ++;
  }
  return l;
};
