/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i --) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i] !== 0) break;
  }
  if (i === -1 && digits[0] === 0) digits.unshift(1);
  return digits;
};
