/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var s = x.toString();
  var b = s[0] === '-';
  var k = b ? 1 : 0;
  var r = '';
  for (var i = s.length - 1; i >= k; i --) {
    r += s[i];
  }
  if (b && r > Math.pow(2, 31)) return 0;
  else if (!b && r > (Math.pow(2, 31) - 1)) return 0
  else return b ? -r : r;
};
