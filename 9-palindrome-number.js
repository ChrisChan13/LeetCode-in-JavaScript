/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  if (x <= 11) return true;
  var l = parseInt(Math.log10(x), 10) + 1;
  var m = parseInt(l / 2, 10);
  for (var i = 1; i <= m; i ++) {
    if (parseInt(parseInt(x / Math.pow(10, l - i), 10) % 10, 10) !== parseInt(parseInt(x / Math.pow(10, i - 1), 10) % parseInt(x / Math.pow(10, i), 10), 10)) break;
  }
  return i > m;
};
