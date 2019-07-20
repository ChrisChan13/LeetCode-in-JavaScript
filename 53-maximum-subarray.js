/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums[1] === undefined) return nums[0];
  var s = -Infinity;
  for (var i = 0; i < nums.length; i ++) {
    var t = 0;
    for (var j = i; j < nums.length; j ++) {
      t += nums[j];
      if (t > s) s = t;
    }
  }
  return s;
};
