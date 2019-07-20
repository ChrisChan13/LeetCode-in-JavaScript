/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var d = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  };
  var r = 0;
  for (var i = 0; i < s.length; i ++) {
    if (s[i] + s[i + 1] in d) {
      r += d[s[i] + s[i + 1]];
      i += 1;
      continue;
    }
    r += d[s[i]];
  }
  return r;
};
