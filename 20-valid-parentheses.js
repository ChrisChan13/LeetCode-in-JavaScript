/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var d = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  var a = [];
  for (var i = 0; i < s.length; i ++) {
    if (!(s[i] in d))
      a[a.length] = s[i]
    else if (a[a.length - 1] === d[s[i]])
      a.length -= 1;
    else break;
  }
  return i === s.length && a.length === 0;
};
