/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  var len = 1;
  var sub = s[0];
  for (var i = 1; i < s.length; i ++) {
    var idx = sub.indexOf(s[i]);
    if (idx > -1) {
      if (sub.length > len) len = sub.length;
      sub = sub.slice(idx + 1);
    }
    sub += s[i];
  }
  if (sub.length > len) len = sub.length;
  return len;
};
