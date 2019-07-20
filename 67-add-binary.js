/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var s = '';
  var i = a.length - 1;
  var j = b.length - 1;
  var d = 0;
  var t = 0;
  var c = 0;
  while (i >= 0 || j >= 0) {
    t = +!!+a[i] + +!!+b[j] + c;
    d = t % 2;
    c = (t - d) / 2;
    s = d + s;
    i --;
    j --;
  }
  return c ? c + s : s;
};
