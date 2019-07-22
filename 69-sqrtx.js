/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var i = Math.pow(10, Math.ceil(Math.ceil(Math.log10(x)) / 2));
  while (true) {
    if (i * i <= x) return i;
    i --;
  }
};
