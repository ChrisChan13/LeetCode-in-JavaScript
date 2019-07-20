/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var s = '1';
  var c = 1;
  var t = '';
  for (var i = 1; i < n; i ++) {
    for (var j = 0; j < s.length; j ++) {
      if (s[j] === s[j + 1]) c ++;
      else {
        t += c + s[j];
        c = 1;
      }
    }
    s = t;
    t = '';
  }
  return s;
};
