/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  var i = 0;
  var s = '';
  while (true) {
    if (strs[0][i] === undefined) break;
    for (var j = 1; j < strs.length; j ++) {
      if (strs[j][i] === undefined || strs[j][i] !== strs[0][i]) break;
    }
    if (j < strs.length) break;
    s += strs[0][i];
    i ++;
  }
  return s;
};
